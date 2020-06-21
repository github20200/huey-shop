import { IProduct } from 'shared/models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { SizeService } from 'shared/services/size.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  size$;
  product: IProduct = {} as IProduct;
  id;

  constructor(
    private categoryService: CategoryService,
    private sizeService: SizeService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {

    this.categories$ = categoryService.getCategories();
    this.size$ = sizeService.getSize();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getById(this.id)
        .take(1)
        .subscribe(product => this.product = product);
    }
  }

  save(product) {
    if (this.id) this.productService.updateById(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (confirm('Are you sure?')) {
      if (this.id) {
        this.productService.deleteById(this.id);
        this.router.navigate(['/admin/products']);
      }
    }
  }

}
