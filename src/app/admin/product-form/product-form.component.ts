import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { ProductForm } from '../../models/product';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product: ProductForm = { title: '', price: 0, category: '', imageUrl: ''};
  private id: string;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
      this.categories$ = categoryService.getAll();
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.id) {
        this.productService.get(this.id).take(1).subscribe(prod => this.product = prod);
      }
  }

  ngOnInit() {
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
    this.productService.create(product);
    }
    this.router.navigate(['admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) { return; }
    this.productService.delete(this.id);
    this.router.navigate(['admin/products']);
  }

}
