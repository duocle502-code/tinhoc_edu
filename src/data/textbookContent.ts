import { TextbookChapter, GradeLevel } from '../types';

// Helper to create lessons
const L = (id: string, title: string, grade: GradeLevel, chapterIndex: number, lessonIndex: number, content: string, keyConcepts: string[], icon?: string) => ({
  id, title, content, keyConcepts, grade, chapterIndex, lessonIndex, icon: icon || '📖',
});

export const TEXTBOOK_CHAPTERS: TextbookChapter[] = [
  // ==================== LỚP 3 ====================
  {
    id: 'g3_c1', title: 'Chủ đề A: Máy tính và em', description: 'Tìm hiểu về máy tính, các bộ phận và cách sử dụng cơ bản', icon: '💻', grade: 3,
    lessons: [
      L('g3_c1_l1', 'Bài 1: Những thiết bị thông minh', 3, 0, 0,
`## Những thiết bị thông minh quanh em

Trong cuộc sống hàng ngày, chúng ta sử dụng rất nhiều **thiết bị thông minh**. Đó là những thiết bị có khả năng xử lý thông tin tự động.

### Các thiết bị thông minh phổ biến
- **Máy tính để bàn** (Desktop): Gồm thân máy, màn hình, bàn phím, chuột
- **Máy tính xách tay** (Laptop): Gọn nhẹ, dễ mang đi
- **Máy tính bảng** (Tablet): Màn hình cảm ứng, không bàn phím rời
- **Điện thoại thông minh** (Smartphone): Thiết bị nhỏ gọn đa năng

### Thiết bị thông minh giúp gì?
1. **Học tập**: Tra cứu thông tin, học trực tuyến
2. **Giải trí**: Nghe nhạc, xem phim, chơi game
3. **Liên lạc**: Gọi điện, nhắn tin, video call
4. **Làm việc**: Soạn văn bản, tính toán, thiết kế

> 💡 **Ghi nhớ**: Thiết bị thông minh là công cụ hữu ích, nhưng cần sử dụng đúng cách và vừa phải.`,
        ['Thiết bị thông minh', 'Desktop', 'Laptop', 'Tablet', 'Smartphone'], '📱'),

      L('g3_c1_l2', 'Bài 2: Bên trong máy tính', 3, 0, 1,
`## Bên trong máy tính có gì?

Máy tính gồm nhiều bộ phận phối hợp với nhau.

### Các bộ phận chính
| Bộ phận | Chức năng | Ví von |
|---------|-----------|--------|
| **CPU** | Xử lý tính toán | Bộ não |
| **RAM** | Bộ nhớ tạm thời | Bàn làm việc |
| **Ổ cứng** | Lưu trữ lâu dài | Tủ hồ sơ |
| **Màn hình** | Hiển thị hình ảnh | Cửa sổ |

### Thiết bị nhập và xuất
- **Thiết bị nhập** (Input): Bàn phím, chuột, micro, webcam → đưa thông tin VÀO máy tính
- **Thiết bị xuất** (Output): Màn hình, loa, máy in → đưa thông tin RA ngoài

### Quy trình xử lý thông tin
\`\`\`
Nhập vào (Input) → Xử lý (Processing) → Xuất ra (Output)
\`\`\`

> 💡 **Ghi nhớ**: CPU là bộ não của máy tính, RAM là bộ nhớ tạm, ổ cứng là bộ nhớ lâu dài.`,
        ['CPU', 'RAM', 'Ổ cứng', 'Thiết bị nhập', 'Thiết bị xuất'], '🔧'),

      L('g3_c1_l3', 'Bài 3: Sử dụng máy tính đúng cách', 3, 0, 2,
`## Sử dụng máy tính an toàn

### Tư thế ngồi đúng
- Ngồi **thẳng lưng**, không cúi quá gần màn hình
- Mắt cách màn hình khoảng **50-70 cm**
- Hai tay đặt thoải mái trên bàn phím
- Chân chạm sàn hoặc để trên bệ

### Thời gian sử dụng hợp lý
- Nghỉ mắt mỗi **30-45 phút**
- Không sử dụng quá **2 giờ/ngày** (đối với học sinh tiểu học)
- Nhìn xa (ra cửa sổ) khi nghỉ mắt

### Bật và tắt máy tính đúng cách
1. **Bật máy**: Nhấn nút **Power** ⏻
2. **Tắt máy**: Start → Shut down (KHÔNG rút điện đột ngột)

> ⚠️ **Lưu ý**: Tắt máy sai cách có thể làm mất dữ liệu và hỏng máy.`,
        ['Tư thế ngồi', 'Nghỉ mắt', 'Bật/tắt máy đúng cách'], '🪑'),
    ],
  },
  {
    id: 'g3_c2', title: 'Chủ đề B: Em tập soạn thảo', description: 'Học cách gõ bàn phím và soạn thảo văn bản đơn giản', icon: '⌨️', grade: 3,
    lessons: [
      L('g3_c2_l1', 'Bài 1: Làm quen với bàn phím', 3, 1, 0,
`## Bàn phím và cách gõ

### Các vùng phím chính
- **Hàng phím cơ sở** (Home row): A S D F - J K L ; → đặt ngón tay mặc định
- **Hàng phím trên**: Q W E R T - Y U I O P
- **Hàng phím dưới**: Z X C V B - N M
- **Hàng phím số**: 1 2 3 4 5 6 7 8 9 0

### Các phím đặc biệt quan trọng
| Phím | Công dụng |
|------|-----------|
| **Enter** | Xuống dòng, xác nhận |
| **Space** | Tạo khoảng trắng |
| **Backspace** | Xóa ký tự bên trái |
| **Shift** | Gõ chữ HOA (giữ + gõ) |
| **Caps Lock** | Bật/tắt chế độ viết hoa |
| **Tab** | Thụt đầu dòng |

### Đặt ngón tay đúng cách
- Ngón trỏ trái: phím **F** (có gờ nổi)
- Ngón trỏ phải: phím **J** (có gờ nổi)
- Các ngón còn lại đặt lần lượt trên hàng cơ sở`,
        ['Hàng phím cơ sở', 'Enter', 'Backspace', 'Shift', 'Caps Lock'], '⌨️'),

      L('g3_c2_l2', 'Bài 2: Soạn thảo văn bản với Word', 3, 1, 1,
`## Microsoft Word cơ bản

### Mở Microsoft Word
1. Click đúp vào biểu tượng **Word** trên Desktop, hoặc
2. Start → Microsoft Word

### Các thao tác cơ bản
- **Gõ chữ**: Gõ bàn phím, chữ hiện tại vị trí con trỏ
- **Xuống dòng**: Nhấn **Enter**
- **Xóa chữ**: Nhấn **Backspace** (xóa bên trái) hoặc **Delete** (xóa bên phải)

### Phím tắt quan trọng
| Phím tắt | Chức năng |
|----------|-----------|
| **Ctrl + S** | Lưu file |
| **Ctrl + Z** | Hoàn tác |
| **Ctrl + B** | In đậm |
| **Ctrl + I** | In nghiêng |
| **Ctrl + U** | Gạch chân |
| **Ctrl + C** | Sao chép |
| **Ctrl + V** | Dán |

### Định dạng văn bản
- **Font chữ**: Chọn kiểu chữ (Arial, Times New Roman...)
- **Font size**: Chọn cỡ chữ (12, 14, 16...)
- **Căn lề**: Trái (Ctrl+L), Giữa (Ctrl+E), Phải (Ctrl+R)`,
        ['Microsoft Word', 'Phím tắt', 'Định dạng', 'Font chữ'], '📝'),
    ],
  },

  // ==================== LỚP 4 ====================
  {
    id: 'g4_c1', title: 'Chủ đề A: Máy tính và em', description: 'Mạng máy tính và Internet cơ bản', icon: '🌐', grade: 4,
    lessons: [
      L('g4_c1_l1', 'Bài 1: Mạng máy tính', 4, 0, 0,
`## Mạng máy tính là gì?

**Mạng máy tính** là nhiều máy tính được kết nối với nhau để chia sẻ dữ liệu và tài nguyên.

### Lợi ích của mạng máy tính
1. **Chia sẻ dữ liệu**: Gửi file, tài liệu giữa các máy
2. **Chia sẻ thiết bị**: Dùng chung máy in, ổ cứng mạng
3. **Liên lạc**: Email, chat, video call
4. **Học tập**: Truy cập tài liệu trực tuyến

### Internet
**Internet** là mạng máy tính lớn nhất thế giới, kết nối hàng tỷ thiết bị.

### Trình duyệt web
Để truy cập trang web, ta dùng **trình duyệt** (browser):
- Google Chrome, Microsoft Edge, Firefox, Safari

### An toàn khi dùng Internet
- ❌ Không chia sẻ thông tin cá nhân (địa chỉ, SĐT)
- ❌ Không click vào link lạ
- ✅ Hỏi ý kiến người lớn khi gặp nội dung lạ
- ✅ Sử dụng Internet có thời gian hợp lý`,
        ['Mạng máy tính', 'Internet', 'Trình duyệt', 'An toàn mạng'], '🌐'),
    ],
  },
  {
    id: 'g4_c2', title: 'Chủ đề B: Phần mềm ứng dụng', description: 'Soạn thảo văn bản nâng cao và thiết kế trình chiếu', icon: '📊', grade: 4,
    lessons: [
      L('g4_c2_l1', 'Bài 1: Soạn thảo văn bản nâng cao', 4, 1, 0,
`## Soạn thảo nâng cao với Word

### Chèn hình ảnh
1. Vào tab **Insert** → **Pictures**
2. Chọn ảnh từ máy tính → **Insert**
3. Kéo góc ảnh để thay đổi kích thước

### Chèn bảng biểu
1. **Insert** → **Table**
2. Chọn số hàng × cột
3. Gõ nội dung vào các ô

### Danh sách
- **Numbered List** (1, 2, 3...): Danh sách có thứ tự
- **Bulleted List** (•, ■): Danh sách không thứ tự

### Header & Footer
- **Header**: Nội dung lặp lại ở đầu mỗi trang
- **Footer**: Nội dung lặp lại ở cuối mỗi trang
- Thường dùng để đánh số trang, ghi tên tài liệu`,
        ['Chèn ảnh', 'Chèn bảng', 'Danh sách', 'Header/Footer'], '📄'),

      L('g4_c2_l2', 'Bài 2: Thiết kế bài trình chiếu', 4, 1, 1,
`## Microsoft PowerPoint

### PowerPoint là gì?
Phần mềm tạo bài **trình chiếu** (slideshow) để thuyết trình.

### Các thao tác cơ bản
| Thao tác | Cách làm |
|----------|----------|
| Thêm slide | Ctrl + M |
| Trình chiếu | F5 |
| Kết thúc trình chiếu | Esc |

### Thiết kế slide đẹp
- **Ít chữ**: Mỗi slide tối đa 6-7 dòng
- **Hình ảnh**: Minh họa rõ ràng, liên quan nội dung
- **Font chữ**: Dùng 1-2 font, cỡ lớn (≥ 24)
- **Màu sắc**: Hài hòa, tương phản tốt

### Hiệu ứng
- **Transition**: Hiệu ứng chuyển giữa các slide
- **Animation**: Hiệu ứng cho từng đối tượng trên slide

> 💡 **Mẹo**: Không nên dùng quá nhiều hiệu ứng, sẽ gây rối mắt.`,
        ['PowerPoint', 'Slide', 'Transition', 'Animation'], '📊'),
    ],
  },

  // ==================== LỚP 5 ====================
  {
    id: 'g5_c1', title: 'Chủ đề A: Máy tính và em', description: 'Internet, email và an toàn thông tin', icon: '📧', grade: 5,
    lessons: [
      L('g5_c1_l1', 'Bài 1: Internet và dịch vụ', 5, 0, 0,
`## Internet và các dịch vụ

### Tìm kiếm thông tin
Sử dụng **công cụ tìm kiếm** (Google, Bing) để tìm thông tin:
1. Mở trình duyệt → vào google.com
2. Gõ **từ khóa** ngắn gọn, rõ ràng
3. Nhấn Enter hoặc click nút Tìm kiếm

### Email (Thư điện tử)
- **Địa chỉ email**: tên@nhacungcap.com (vd: hocsinh@gmail.com)
- **Ưu điểm**: Nhanh, miễn phí, gửi được file đính kèm

### Các thành phần của email
| Phần | Ý nghĩa |
|------|---------|
| **To** | Người nhận chính |
| **CC** | Gửi bản sao |
| **Subject** | Chủ đề thư |
| **Body** | Nội dung chính |
| **Attachment** | File đính kèm |

### Quy tắc gửi email lịch sự
- Viết chủ đề rõ ràng
- Lời chào đầu thư, cảm ơn cuối thư
- Kiểm tra lại trước khi gửi`,
        ['Tìm kiếm', 'Email', 'Từ khóa', 'File đính kèm'], '📧'),
    ],
  },
  {
    id: 'g5_c2', title: 'Chủ đề C: Lập trình với Scratch', description: 'Lập trình kéo thả cơ bản với Scratch', icon: '🐱', grade: 5,
    lessons: [
      L('g5_c2_l1', 'Bài 1: Làm quen với Scratch', 5, 1, 0,
`## Scratch - Ngôn ngữ lập trình kéo thả

### Scratch là gì?
**Scratch** là ngôn ngữ lập trình do MIT tạo ra, dùng các **khối lệnh** kéo thả thay vì gõ code.

### Giao diện Scratch
- **Sân khấu** (Stage): Nơi nhân vật hoạt động (480×360 pixel)
- **Sprite**: Nhân vật trên sân khấu
- **Khối lệnh**: Các lệnh kéo thả từ bảng lệnh
- **Vùng lập trình**: Nơi ghép các khối lệnh

### Các nhóm khối lệnh
| Nhóm | Màu | Chức năng |
|------|-----|-----------|
| **Motion** | Xanh dương | Di chuyển |
| **Looks** | Tím | Hiển thị, thay đổi hình |
| **Sound** | Hồng | Âm thanh |
| **Events** | Vàng | Sự kiện bắt đầu |
| **Control** | Cam | Lặp, điều kiện |
| **Sensing** | Xanh lá | Cảm biến, nhận biết |
| **Variables** | Cam đậm | Biến số |

### Chương trình đầu tiên
1. Kéo khối **"when 🏴 clicked"** (Events)
2. Ghép khối **"move 10 steps"** (Motion)
3. Nhấn cờ xanh 🏴 để chạy!`,
        ['Scratch', 'Sprite', 'Stage', 'Khối lệnh', 'Events'], '🐱'),

      L('g5_c2_l2', 'Bài 2: Vòng lặp và điều kiện', 5, 1, 1,
`## Lập trình với vòng lặp và điều kiện

### Vòng lặp (Loop)
Thay vì ghép nhiều khối giống nhau, dùng **vòng lặp**:

- **repeat (10)**: Lặp lại 10 lần
- **forever**: Lặp mãi mãi (đến khi dừng chương trình)

### Điều kiện (Condition)
Kiểm tra một điều kiện rồi quyết định:

- **if...then**: Nếu đúng → thực hiện
- **if...then...else**: Nếu đúng → làm A, sai → làm B

### Ví dụ: Sprite di chuyển và nảy
\`\`\`
when 🏴 clicked
forever
  move (10) steps
  if on edge, bounce
\`\`\`

### Biến (Variable)
**Biến** là nơi lưu trữ giá trị có thể thay đổi:
- Dùng để đếm điểm, theo dõi tốc độ, lưu tên người chơi
- Tạo biến: Variables → Make a Variable`,
        ['Vòng lặp', 'Điều kiện', 'repeat', 'forever', 'if-then', 'Biến'], '🔄'),
    ],
  },

  // ==================== LỚP 6 ====================
  {
    id: 'g6_c1', title: 'Chủ đề A: Máy tính và cộng đồng', description: 'Vai trò của máy tính, phần mềm và đạo đức số', icon: '🏘️', grade: 6,
    lessons: [
      L('g6_c1_l1', 'Bài 1: Thông tin và dữ liệu', 6, 0, 0,
`## Thông tin và dữ liệu

### Thông tin là gì?
**Thông tin** là những hiểu biết có ý nghĩa mà con người thu nhận được. Thông tin giúp ta ra quyết định.

### Dữ liệu là gì?
**Dữ liệu** là thông tin được biểu diễn dưới dạng máy tính có thể xử lý được.

### Các dạng thông tin
| Dạng | Ví dụ |
|------|-------|
| **Văn bản** | Sách, báo, email |
| **Hình ảnh** | Ảnh, tranh, biểu đồ |
| **Âm thanh** | Nhạc, giọng nói |
| **Video** | Phim, clip |
| **Số liệu** | Bảng điểm, thống kê |

### Xử lý thông tin
\`\`\`
Thu thập → Lưu trữ → Xử lý → Truyền đạt
\`\`\`

> 💡 **Phân biệt**: Dữ liệu là "nguyên liệu thô", thông tin là dữ liệu đã được xử lý có ý nghĩa.`,
        ['Thông tin', 'Dữ liệu', 'Xử lý thông tin'], '📊'),

      L('g6_c1_l2', 'Bài 2: Phần mềm và ứng dụng', 6, 0, 1,
`## Phần mềm máy tính

### Phân loại phần mềm
1. **Phần mềm hệ thống**: Quản lý máy tính (Windows, macOS, Linux)
2. **Phần mềm ứng dụng**: Phục vụ người dùng (Word, Chrome, Photoshop)
3. **Phần mềm tiện ích**: Hỗ trợ (diệt virus, nén file, sao lưu)

### Bản quyền phần mềm
- **Phần mềm thương mại**: Phải mua bản quyền (Microsoft Office)
- **Phần mềm miễn phí** (Freeware): Dùng miễn phí (VLC, 7-Zip)
- **Phần mềm mã nguồn mở** (Open Source): Miễn phí, được xem và sửa code (Linux, LibreOffice)

### Đạo đức số
- ✅ Sử dụng phần mềm **có bản quyền** hợp pháp
- ✅ Tôn trọng **quyền riêng tư** của người khác
- ❌ Không sử dụng phần mềm lậu (crack)
- ❌ Không bắt nạt trên mạng (cyberbullying)
- ❌ Không chia sẻ tin giả (fake news)`,
        ['Phần mềm hệ thống', 'Phần mềm ứng dụng', 'Bản quyền', 'Đạo đức số'], '💿'),
    ],
  },
  {
    id: 'g6_c2', title: 'Chủ đề B: Mạng máy tính và Internet', description: 'Tìm hiểu mạng LAN, WAN, Internet và các dịch vụ', icon: '🔗', grade: 6,
    lessons: [
      L('g6_c2_l1', 'Bài 1: Mạng máy tính', 6, 1, 0,
`## Các loại mạng máy tính

### Phân loại theo phạm vi
| Loại mạng | Phạm vi | Ví dụ |
|-----------|---------|-------|
| **LAN** | Phòng, tòa nhà | Mạng trường học |
| **WAN** | Thành phố, quốc gia | Mạng ngân hàng |
| **Internet** | Toàn cầu | World Wide Web |

### Thiết bị mạng
- **Modem**: Chuyển đổi tín hiệu để kết nối Internet
- **Router**: Phân phối kết nối cho nhiều thiết bị
- **Switch**: Kết nối các máy tính trong mạng LAN
- **Cáp mạng / WiFi**: Phương tiện truyền dữ liệu

### Giao thức và địa chỉ
- **IP Address**: Địa chỉ duy nhất của mỗi thiết bị trên mạng
- **HTTP/HTTPS**: Giao thức truy cập web (HTTPS có mã hóa bảo mật)
- **URL**: Địa chỉ trang web (https://www.example.com)

### An toàn mạng
- Dùng **mật khẩu mạnh** (chữ hoa, thường, số, ký tự đặc biệt)
- Nhận biết **phishing** (email/web giả mạo)
- Cài **phần mềm diệt virus** và cập nhật thường xuyên`,
        ['LAN', 'WAN', 'Internet', 'Router', 'IP Address', 'HTTPS'], '🔗'),
    ],
  },

  // ==================== LỚP 7 ====================
  {
    id: 'g7_c1', title: 'Chủ đề A: Thông tin và dữ liệu số', description: 'Biểu diễn thông tin trong máy tính', icon: '🔢', grade: 7,
    lessons: [
      L('g7_c1_l1', 'Bài 1: Biểu diễn thông tin trong máy tính', 7, 0, 0,
`## Hệ nhị phân và biểu diễn dữ liệu

### Hệ nhị phân (Binary)
Máy tính lưu trữ mọi thứ bằng **hệ nhị phân** — chỉ dùng 2 chữ số: **0** và **1**.

### Đơn vị đo dữ liệu
| Đơn vị | Bằng | Ví dụ |
|--------|------|-------|
| **1 bit** | 0 hoặc 1 | Đơn vị nhỏ nhất |
| **1 Byte** | 8 bit | ≈ 1 ký tự |
| **1 KB** | 1024 Byte | ≈ 1 đoạn văn ngắn |
| **1 MB** | 1024 KB | ≈ 1 ảnh chụp |
| **1 GB** | 1024 MB | ≈ 1 phim ngắn |
| **1 TB** | 1024 GB | ≈ 200,000 ảnh |

### Đổi số thập phân sang nhị phân
Chia liên tiếp cho 2, lấy số dư từ dưới lên:
- **5₁₀** = 101₂ (5÷2=2 dư 1, 2÷2=1 dư 0, 1÷2=0 dư 1)
- **10₁₀** = 1010₂

### Bảng mã ký tự
- **ASCII**: 128 ký tự cơ bản (A=65, a=97, 0=48)
- **Unicode**: Hỗ trợ mọi ngôn ngữ (Việt, Trung, Nhật...)`,
        ['Hệ nhị phân', 'Bit', 'Byte', 'ASCII', 'Unicode'], '🔢'),
    ],
  },
  {
    id: 'g7_c2', title: 'Chủ đề D: Phần mềm bảng tính', description: 'Sử dụng Excel để xử lý dữ liệu', icon: '📊', grade: 7,
    lessons: [
      L('g7_c2_l1', 'Bài 1: Làm quen với bảng tính', 7, 1, 0,
`## Microsoft Excel cơ bản

### Giao diện Excel
- **Bảng tính** (Worksheet): Gồm các hàng (1, 2, 3...) và cột (A, B, C...)
- **Ô** (Cell): Giao điểm của hàng và cột, ví dụ: **A1**, **B3**, **C5**
- **Sheet tab**: Chuyển giữa các trang tính

### Nhập dữ liệu
- Click vào ô → gõ dữ liệu → Enter (xuống) hoặc Tab (sang phải)
- Các kiểu dữ liệu: Số, Chữ, Ngày tháng

### Công thức cơ bản
Mọi công thức đều bắt đầu bằng dấu **=**

| Công thức | Ý nghĩa | Ví dụ |
|-----------|---------|-------|
| =A1+B1 | Cộng | =5+3 → 8 |
| =A1-B1 | Trừ | =10-4 → 6 |
| =A1*B1 | Nhân | =3*5 → 15 |
| =A1/B1 | Chia | =10/2 → 5 |

### Các hàm thường dùng
| Hàm | Chức năng | Ví dụ |
|-----|-----------|-------|
| **SUM** | Tính tổng | =SUM(A1:A10) |
| **AVERAGE** | Trung bình | =AVERAGE(A1:A10) |
| **MAX** | Giá trị lớn nhất | =MAX(A1:A10) |
| **MIN** | Giá trị nhỏ nhất | =MIN(A1:A10) |
| **COUNT** | Đếm ô có số | =COUNT(A1:A10) |
| **IF** | Kiểm tra điều kiện | =IF(A1>=5,"Đạt","Chưa đạt") |`,
        ['Excel', 'Cell', 'Công thức', 'SUM', 'AVERAGE', 'IF'], '📊'),
    ],
  },

  // ==================== LỚP 8 ====================
  {
    id: 'g8_c1', title: 'Chủ đề E: Lập trình Python cơ bản', description: 'Lập trình với ngôn ngữ Python', icon: '🐍', grade: 8,
    lessons: [
      L('g8_c1_l1', 'Bài 1: Giới thiệu Python', 8, 0, 0,
`## Ngôn ngữ lập trình Python

### Python là gì?
**Python** là ngôn ngữ lập trình phổ biến, cú pháp đơn giản, dễ đọc.

### Chương trình Python đầu tiên
\`\`\`python
print("Xin chào các bạn!")
print("Tôi đang học Python")
\`\`\`

### Biến và kiểu dữ liệu
\`\`\`python
ten = "Minh"        # str - chuỗi
tuoi = 14           # int - số nguyên
diem = 8.5          # float - số thực
hoc_gioi = True     # bool - đúng/sai
\`\`\`

### Nhập và xuất dữ liệu
\`\`\`python
# Xuất (output)
print("Xin chào!")
print(f"Tên: {ten}, Tuổi: {tuoi}")

# Nhập (input)
ten = input("Nhập tên: ")
tuoi = int(input("Nhập tuổi: "))
\`\`\`

### Toán tử
| Toán tử | Ý nghĩa | Ví dụ |
|---------|---------|-------|
| + - * / | Cộng, Trừ, Nhân, Chia | 10/3 = 3.33 |
| // | Chia lấy nguyên | 10//3 = 3 |
| % | Chia lấy dư | 10%3 = 1 |
| ** | Lũy thừa | 2**3 = 8 |`,
        ['Python', 'Biến', 'Kiểu dữ liệu', 'print', 'input'], '🐍'),

      L('g8_c1_l2', 'Bài 2: Câu lệnh điều kiện', 8, 0, 1,
`## Cấu trúc rẽ nhánh

### if - else
\`\`\`python
diem = int(input("Nhập điểm: "))

if diem >= 5:
    print("Đạt")
else:
    print("Chưa đạt")
\`\`\`

### if - elif - else
\`\`\`python
diem = float(input("Nhập điểm: "))

if diem >= 8.5:
    print("Giỏi")
elif diem >= 6.5:
    print("Khá")
elif diem >= 5.0:
    print("Trung bình")
else:
    print("Yếu")
\`\`\`

### Toán tử so sánh
| Toán tử | Ý nghĩa |
|---------|---------|
| == | Bằng |
| != | Khác |
| > < | Lớn hơn, Nhỏ hơn |
| >= <= | Lớn hơn hoặc bằng, Nhỏ hơn hoặc bằng |

### Toán tử logic
| Toán tử | Ý nghĩa |
|---------|---------|
| **and** | Và (cả hai đúng) |
| **or** | Hoặc (ít nhất một đúng) |
| **not** | Phủ định |

> 💡 **Lưu ý**: Python dùng **thụt lề** (4 dấu cách) để xác định khối lệnh, không dùng {}`,
        ['if-else', 'elif', 'Toán tử so sánh', 'Toán tử logic', 'Thụt lề'], '🔀'),

      L('g8_c1_l3', 'Bài 3: Vòng lặp', 8, 0, 2,
`## Cấu trúc lặp trong Python

### Vòng lặp for
Lặp với số lần **biết trước**:
\`\`\`python
# In số từ 1 đến 5
for i in range(1, 6):
    print(i)

# Duyệt danh sách
fruits = ["Táo", "Cam", "Xoài"]
for fruit in fruits:
    print(fruit)
\`\`\`

### Hàm range()
| Cú pháp | Kết quả |
|---------|---------|
| range(5) | 0, 1, 2, 3, 4 |
| range(1, 6) | 1, 2, 3, 4, 5 |
| range(0, 10, 2) | 0, 2, 4, 6, 8 |

### Vòng lặp while
Lặp khi điều kiện **còn đúng**:
\`\`\`python
# Đếm ngược
so = 5
while so > 0:
    print(so)
    so = so - 1
print("Hết!")
\`\`\`

### break và continue
- **break**: Thoát khỏi vòng lặp ngay lập tức
- **continue**: Bỏ qua phần còn lại, chuyển sang lần lặp tiếp`,
        ['for', 'while', 'range', 'break', 'continue'], '🔁'),
    ],
  },

  // ==================== LỚP 9 ====================
  {
    id: 'g9_c1', title: 'Chủ đề E: Thiết kế trang web', description: 'Tạo trang web với HTML và CSS', icon: '🌍', grade: 9,
    lessons: [
      L('g9_c1_l1', 'Bài 1: Giới thiệu HTML', 9, 0, 0,
`## HTML - Ngôn ngữ đánh dấu siêu văn bản

### HTML là gì?
**HTML** (HyperText Markup Language) tạo cấu trúc cho trang web.

### Cấu trúc cơ bản
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Trang web đầu tiên</title>
</head>
<body>
    <h1>Xin chào!</h1>
    <p>Đây là trang web đầu tiên.</p>
</body>
</html>
\`\`\`

### Các thẻ HTML phổ biến
| Thẻ | Chức năng |
|-----|-----------|
| \`<h1> - <h6>\` | Tiêu đề (lớn → nhỏ) |
| \`<p>\` | Đoạn văn |
| \`<a href="...">\` | Liên kết |
| \`<img src="...">\` | Hình ảnh |
| \`<ul>, <ol>, <li>\` | Danh sách |
| \`<table>, <tr>, <td>\` | Bảng |
| \`<div>\` | Khối chứa |
| \`<span>\` | Vùng inline |

### CSS - Định dạng giao diện
\`\`\`html
<style>
  h1 { color: blue; font-size: 24px; }
  p { color: gray; line-height: 1.5; }
  .box { background: #f0f0f0; padding: 20px; }
</style>
\`\`\``,
        ['HTML', 'Thẻ HTML', 'CSS', 'Cấu trúc trang web'], '🌍'),
    ],
  },
  {
    id: 'g9_c2', title: 'Chủ đề A: An toàn thông tin', description: 'Bảo mật, mã hóa và an toàn trên Internet', icon: '🔒', grade: 9,
    lessons: [
      L('g9_c2_l1', 'Bài 1: An toàn thông tin', 9, 1, 0,
`## An toàn thông tin

### Các mối đe dọa
| Loại | Mô tả |
|------|-------|
| **Virus** | Chương trình tự sao chép, phá hoại |
| **Trojan** | Giả dạng phần mềm tốt, chứa mã độc |
| **Ransomware** | Mã hóa dữ liệu, đòi tiền chuộc |
| **Phishing** | Giả mạo để lừa lấy thông tin |
| **Keylogger** | Ghi lại phím bấm, đánh cắp mật khẩu |

### Biện pháp bảo vệ
1. **Mật khẩu mạnh**: ≥8 ký tự, kết hợp chữ HOA, thường, số, ký tự đặc biệt
2. **Xác thực 2 yếu tố** (2FA): Mật khẩu + mã OTP
3. **Cập nhật phần mềm**: Vá lỗi bảo mật
4. **Phần mềm diệt virus**: Quét và loại bỏ mã độc
5. **Sao lưu dữ liệu** (Backup): Quy tắc 3-2-1

### Mã hóa (Encryption)
Biến dữ liệu thành dạng không đọc được nếu không có **khóa giải mã**.
- **HTTPS**: Mã hóa truyền dữ liệu web
- **VPN**: Mã hóa toàn bộ kết nối mạng`,
        ['Virus', 'Phishing', 'Mật khẩu mạnh', '2FA', 'Mã hóa', 'Backup'], '🔒'),
    ],
  },

  // ==================== LỚP 10 ====================
  {
    id: 'g10_c1', title: 'Chủ đề A: Máy tính và xã hội', description: 'Kiến trúc máy tính, hệ điều hành', icon: '🖥️', grade: 10,
    lessons: [
      L('g10_c1_l1', 'Bài 1: Kiến trúc máy tính', 10, 0, 0,
`## Kiến trúc máy tính von Neumann

### Các thành phần chính
\`\`\`
┌─────────────────────────────────┐
│            CPU                  │
│   ┌─────────┐  ┌────────────┐  │
│   │   CU    │  │    ALU     │  │
│   │(Điều khiển)│(Tính toán) │  │
│   └─────────┘  └────────────┘  │
│        ┌──────────┐            │
│        │ Thanh ghi│            │
│        └──────────┘            │
└───────────┬─────────────────────┘
            │ Bus hệ thống
┌───────────┴─────────────────────┐
│         Bộ nhớ chính            │
│   ┌──────────┐ ┌──────────┐    │
│   │   RAM    │ │   ROM    │    │
│   │(đọc/ghi)│ │(chỉ đọc) │    │
│   └──────────┘ └──────────┘    │
└───────────┬─────────────────────┘
            │
┌───────────┴─────────────────────┐
│     Thiết bị nhập/xuất          │
│  Bàn phím, Chuột, Màn hình...  │
└─────────────────────────────────┘
\`\`\`

### CPU (Bộ xử lý trung tâm)
- **CU** (Control Unit): Điều khiển hoạt động
- **ALU** (Arithmetic Logic Unit): Thực hiện tính toán
- **Thanh ghi** (Register): Bộ nhớ siêu nhanh trong CPU

### Bộ nhớ
| Loại | Đặc điểm | Tốc độ |
|------|----------|--------|
| **Thanh ghi** | Trong CPU | Rất nhanh |
| **RAM** | Tạm thời, mất khi tắt | Nhanh |
| **ROM** | Chỉ đọc, chứa BIOS | Nhanh |
| **SSD/HDD** | Lưu lâu dài | Chậm hơn |`,
        ['CPU', 'CU', 'ALU', 'RAM', 'ROM', 'Bus hệ thống'], '🖥️'),

      L('g10_c1_l2', 'Bài 2: Hệ điều hành', 10, 0, 1,
`## Hệ điều hành (Operating System)

### Chức năng chính
1. **Quản lý tiến trình**: Phân chia CPU cho các chương trình
2. **Quản lý bộ nhớ**: Cấp phát và giải phóng RAM
3. **Quản lý file**: Tổ chức tệp và thư mục
4. **Quản lý thiết bị**: Giao tiếp với phần cứng qua Driver
5. **Bảo mật**: Phân quyền người dùng

### Các HĐH phổ biến
| HĐH | Nhà phát triển | Đặc điểm |
|------|----------------|----------|
| **Windows** | Microsoft | Phổ biến nhất, dễ dùng |
| **macOS** | Apple | Cho máy Mac, ổn định |
| **Linux** | Cộng đồng | Miễn phí, mã nguồn mở |
| **Android** | Google | Cho điện thoại |
| **iOS** | Apple | Cho iPhone/iPad |

### Quản lý tệp và thư mục
- **Cây thư mục**: Cấu trúc phân cấp (Gốc → Nhánh → Lá)
- **Đường dẫn tuyệt đối**: C:\\Users\\Thanh\\Documents\\bai.docx
- **Đường dẫn tương đối**: .\\Documents\\bai.docx
- **Quyền truy cập**: Read (đọc), Write (ghi), Execute (thực thi)`,
        ['Hệ điều hành', 'Quản lý tiến trình', 'Quản lý bộ nhớ', 'File system'], '⚙️'),
    ],
  },

  // ==================== LỚP 11 ====================
  {
    id: 'g11_c1', title: 'Chủ đề E: Lập trình nâng cao', description: 'Lập trình Python/C++ nâng cao', icon: '💻', grade: 11,
    lessons: [
      L('g11_c1_l1', 'Bài 1: Hàm và Module', 11, 0, 0,
`## Hàm (Function)

### Định nghĩa hàm
\`\`\`python
def chao(ten):
    """Hàm chào hỏi"""
    return f"Xin chào {ten}!"

# Gọi hàm
print(chao("Minh"))  # Xin chào Minh!
\`\`\`

### Tham số và giá trị trả về
\`\`\`python
def tinh_diem_tb(diem_list):
    tong = sum(diem_list)
    return tong / len(diem_list)

ds_diem = [8, 7, 9, 6, 10]
tb = tinh_diem_tb(ds_diem)
print(f"Điểm TB: {tb}")  # 8.0
\`\`\`

### Module và Thư viện
\`\`\`python
import math
print(math.sqrt(25))   # 5.0
print(math.pi)         # 3.14159...

import random
print(random.randint(1, 6))  # Số ngẫu nhiên 1-6
\`\`\`

### Đệ quy (Recursion)
\`\`\`python
def giai_thua(n):
    if n <= 1:
        return 1
    return n * giai_thua(n - 1)

print(giai_thua(5))  # 120 = 5×4×3×2×1
\`\`\``,
        ['Hàm', 'Tham số', 'return', 'Module', 'Đệ quy'], '🔧'),

      L('g11_c1_l2', 'Bài 2: Cấu trúc dữ liệu', 11, 0, 1,
`## Cấu trúc dữ liệu trong Python

### List (Danh sách)
\`\`\`python
ds = [1, 2, 3, 4, 5]
ds.append(6)      # Thêm cuối: [1,2,3,4,5,6]
ds.pop()           # Xóa cuối: [1,2,3,4,5]
ds.sort()          # Sắp xếp
ds[0]              # Truy cập: 1
ds[1:4]            # Slicing: [2,3,4]
\`\`\`

### Tuple (Bộ giá trị)
\`\`\`python
toa_do = (10, 20)  # Không thể thay đổi (immutable)
x, y = toa_do     # Unpacking
\`\`\`

### Dictionary (Từ điển)
\`\`\`python
hs = {"ten": "An", "tuoi": 16, "lop": "11A"}
print(hs["ten"])       # An
hs["diem"] = 8.5       # Thêm key mới
\`\`\`

### Set (Tập hợp)
\`\`\`python
s = {1, 2, 3, 2, 1}   # → {1, 2, 3} (không trùng)
s.add(4)
\`\`\`

### List Comprehension
\`\`\`python
binh_phuong = [x**2 for x in range(1, 6)]
# [1, 4, 9, 16, 25]

chan = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
\`\`\``,
        ['List', 'Tuple', 'Dictionary', 'Set', 'List Comprehension'], '📦'),
    ],
  },

  // ==================== LỚP 12 ====================
  {
    id: 'g12_c1', title: 'Chủ đề F: Cơ sở dữ liệu', description: 'Thiết kế và quản lý cơ sở dữ liệu', icon: '🗄️', grade: 12,
    lessons: [
      L('g12_c1_l1', 'Bài 1: Giới thiệu CSDL', 12, 0, 0,
`## Cơ sở dữ liệu quan hệ

### CSDL là gì?
**Cơ sở dữ liệu** (Database) là tập hợp dữ liệu có tổ chức, cho phép lưu trữ, truy xuất hiệu quả.

### Mô hình quan hệ
Dữ liệu được tổ chức thành các **bảng** (table):

| MaHS | HoTen | Lop | DiemTB |
|------|-------|-----|--------|
| HS01 | Nguyễn An | 12A1 | 8.5 |
| HS02 | Trần Bình | 12A2 | 7.0 |

### Các khái niệm quan trọng
- **Bảng** (Table): Chứa dữ liệu theo hàng và cột
- **Bản ghi** (Record/Row): Một hàng dữ liệu
- **Trường** (Field/Column): Một cột dữ liệu
- **Khóa chính** (Primary Key): Xác định duy nhất bản ghi
- **Khóa ngoại** (Foreign Key): Liên kết giữa 2 bảng

### Hệ quản trị CSDL (DBMS)
MySQL, PostgreSQL, SQLite, SQL Server — phần mềm quản lý database.`,
        ['Database', 'Bảng', 'Khóa chính', 'Khóa ngoại', 'DBMS'], '🗄️'),

      L('g12_c1_l2', 'Bài 2: Ngôn ngữ SQL', 12, 0, 1,
`## SQL - Structured Query Language

### Truy vấn dữ liệu (SELECT)
\`\`\`sql
-- Lấy tất cả
SELECT * FROM HocSinh;

-- Lấy cột cụ thể với điều kiện
SELECT HoTen, DiemTB
FROM HocSinh
WHERE DiemTB >= 8.0
ORDER BY DiemTB DESC;
\`\`\`

### Thêm dữ liệu (INSERT)
\`\`\`sql
INSERT INTO HocSinh (MaHS, HoTen, Lop, DiemTB)
VALUES ('HS03', 'Lê Cường', '12A1', 9.0);
\`\`\`

### Cập nhật (UPDATE)
\`\`\`sql
UPDATE HocSinh
SET DiemTB = 8.0
WHERE MaHS = 'HS02';
\`\`\`

### Xóa (DELETE)
\`\`\`sql
DELETE FROM HocSinh WHERE MaHS = 'HS01';
\`\`\`

### Hàm tổng hợp
| Hàm | Chức năng |
|-----|-----------|
| COUNT(*) | Đếm bản ghi |
| SUM(cot) | Tính tổng |
| AVG(cot) | Trung bình |
| MAX(cot) | Giá trị lớn nhất |
| MIN(cot) | Giá trị nhỏ nhất |

### JOIN - Kết bảng
\`\`\`sql
SELECT hs.HoTen, lop.TenLop
FROM HocSinh hs
INNER JOIN Lop lop ON hs.MaLop = lop.MaLop;
\`\`\``,
        ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'JOIN', 'Hàm tổng hợp'], '📝'),
    ],
  },
];

// Helper: get chapters by grade
export function getChaptersByGrade(grade: GradeLevel): TextbookChapter[] {
  return TEXTBOOK_CHAPTERS.filter(ch => ch.grade === grade);
}

// Helper: get all grades that have content
export function getAvailableGrades(): GradeLevel[] {
  const grades = new Set(TEXTBOOK_CHAPTERS.map(ch => ch.grade));
  return Array.from(grades).sort((a, b) => a - b) as GradeLevel[];
}
