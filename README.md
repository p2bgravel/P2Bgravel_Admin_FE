# P2bAdmin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Cấu trúc dự án

https://coggle.it/diagram/XSlAiFj7lVzvUeAb/t/p2b_admin_angular/c155739ba5e1285e5b059b80f6ca97cb1a72045ef6112d48ed8ed1398d268cf6

## Chạy dự án trong môi trường dev

Chạy `npm start` hoặc `yarn start` 

Đường dẫn `http://localhost:4200/`

##Quy định đặt tên trong project (quan trọng):

**Lưu ý:**
*   Các tên file, component, modules, ... thường phân cách bằng dash "-" VD: `article-list.component.ts`
*   Cách đặt tên `feature.type.extension`
    *  feature: tên file cần đặt VD: `article-list`
    *  type: `module`, `component`, `directive`, `service`, `pipe`
    *  extension: `ts`, `scss` ...
*   Xem thêm : https://angular.io/guide/styleguide#naming

**Refs:**
* Cú pháp chung:  https://v7.angular.io/cli/generate

###Tạo module:
`ng g m /path/to/name-module --routing=true` 

* Đường dẫn root `/`  trong trường hợp này chính là `/src/app/`
VD: `ng g m article --routing=true`
* Sẽ tạo các module `article.module.ts` và `article-routing.module.ts` ngay thư mục `/src/app/article`
Option: 
*  `--routing=true` : tạo luôn module routing

###Tạo module-routing trong một module-a:
`ng g m /path/to/module-a/module-a-routing --flat=true` 

**Option:**
*  `--flat=true` : ko cần tạo folder .

###Tạo component trong module:

`ng g c /path/to/folder` 

VD: `ng g c /product/components/product-list` 
* Sẽ tạo ra folder  `product-list` ngay thư mục `/src/app/product/`

###Tạo service:

`ng g s /path/to/folder` 

* Lưu ý: tương tự như trên


## Build

Chạy `npm run build` hoặc `yarn build`

Options: `--prod` : để build production

File build ra trong thư mục `/dist`
