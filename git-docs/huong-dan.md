# Hướng dẫn cơ bản khi sử dụng gitlab

### Install git

Download git tại địa chỉ: [Git-scm](https://git-scm.com/downloads)

### Enable xác thực 2 bước
- Truy cập địa chỉ: User Settings > [Account](http://10.60.156.11/profile/two_factor_auth)
  ![](/images/hd_2FA_1.png)  
- Lưu trữ recovery codes trong trường hợp thiết bị di động gặp sự cố cần reset lại xác thực 2 lớp.
  ![](/images/hd_2FA_2.png)  
### Tạo Project

   `Chỉ các user là PM mới có quyền tạo project. Liên hệ admin để được nâng quyền`

1. Tạo mới một project trên giao diện trang dashboard 
   ![](/images/hd_1.png)

2. Nhập tên project và chọn visibility level  
   ![](/images/hd_2.png)

3. Một số câu lệnh gợi ý đối để thực hiện push code từ local repository lên remote gitlab server  
   ![](/images/hd_3.png)

4. Thêm thành viên vào project  
   - Chọn tab quản lý thành viên của project theo đường dẫn **Settings** > **Members**  
   ![](/images/hd_4.png)  
   - Tìm người dùng theo **Username**  
   ![](/images/hd_5.png)
   - Chọn quyền của người dùng   
   ![](/images/hd_6.png)

### Một số lỗi thường gặp khi sử dụng hệ thống

1. Lỗi 503 khi pull/push code   
   ![](/images/git_503.png)  
   - Lỗi này xảy ra khi sử dụng git thông qua proxy, cần phải loại bỏ proxy trong hệ thống, một số vị trí config cần lưu ý
     - git config -e  
     - C/Users/\<username-pc\>/.gitconfig  
     - Environment http_proxy   
2. Lỗi "Filename too long error" khi clone
   - Đây là lỗi chung của git trên máy tính windows
     - Bật Git Bash với quyền administrator
     - Chạy lệnh $ git config --system core.longpaths true  
