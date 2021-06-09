import { LoaderService } from './../../../shared/modules/loader/loader.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '@core/model/product/product';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '@core/services/product/product.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { debounceTime, distinctUntilChanged, filter, finalize, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {

  @Input() isVisible;
  @Output() closeSearchModalEvent = new EventEmitter();
  searchForm: FormGroup;
  pageIndex = 1;
  pageSize = 6;
  keyword: string = '';
  listProduct: Product[] = [];
  imgAnalyzer: string = "http://52.221.254.26:5000/api/image-analyzer";

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly productService: ProductService,
    private readonly router: Router,
    private msg: NzMessageService,
    private readonly loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.buildForm();

    this.searchForm.controls.keyword.valueChanges.pipe(
      filter((value) => {
        value = value?.trim();
        this.keyword = value;
        if (value) {
          this.loaderService.showLoader('search')
          return value;
        }
      }),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(keywords => {
        return this.productService.searchProductByFullText(this.pageIndex, this.pageSize, [keywords])
      })
    ).subscribe(res => {
      if (res.code == 'OK') {
        this.listProduct = res.data.content;
      }
      this.loaderService.hideLoader('search');
    })
  }

  buildForm() {
    this.searchForm = this.formBuilder.group({
      keyword: [''],
    });
  }

  handleCancel() {
    this.searchForm.reset();
    this.keyword = '';
    this.listProduct = [];
    this.closeSearchModalEvent.emit();
  }

  searchProductFullText(keywords: string[]) {
    this.keyword = keywords[0];
    this.loaderService.showLoader('search');
    this.productService.searchProductByFullText(this.pageIndex, this.pageSize, keywords)
      .pipe(
        finalize(() => this.loaderService.hideLoader('search'))
      )
      .subscribe((res) => {
        if (res.code == 'OK') {
          this.listProduct = res.data.content;
        }
      });
  }

  viewDetail(id: number) {
    this.handleCancel();
    this.router.navigate(['/product/detail/', id]);
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
      this.searchProductFullText(info.file.response.data);

    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
}
