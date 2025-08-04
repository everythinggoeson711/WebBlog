# Deploy WebBlog lên Render

## Cách deploy:

### Option 1: Sử dụng Dashboard (Khuyến nghị cho người mới)

1. **Tạo tài khoản Render**: Truy cập [render.com](https://render.com) và đăng ký
2. **Connect GitHub**: Kết nối tài khoản GitHub của bạn
3. **Create Static Site**: 
   - Click "New +" → "Static Site"
   - Chọn repository `WebBlog`
   - Cấu hình như sau:
     - **Build Command**: `npm ci && npm run build`
     - **Publish Directory**: `dist`
     - **Auto-Deploy**: Yes

### Option 2: Sử dụng file render.yaml (Tự động)

File `render.yaml` đã được tạo sẵn trong project. Render sẽ tự động đọc và deploy theo cấu hình này.

## Cấu hình đã setup sẵn:

✅ **render.yaml** - Cấu hình tự động cho Render
✅ **public/_redirects** - Để React Router hoạt động đúng trên static site
✅ **package.json** - Thêm engines để chỉ định Node.js version
✅ **index.html** - Cập nhật title phù hợp

## Lưu ý:

- Domain miễn phí sẽ có dạng: `https://webblog-xxx.onrender.com`
- Thời gian deploy: 2-5 phút
- Tự động deploy lại khi push code mới lên GitHub
- SSL certificate được cung cấp miễn phí

## Troubleshooting:

Nếu gặp lỗi build, kiểm tra:
1. File `package.json` có đúng scripts không
2. Dependencies có đầy đủ không
3. Build command có đúng không: `npm ci && npm run build`
