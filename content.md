<!-- @format -->

<!-- Types: Number, String, Boolean, Undefined, Array, Object -->

<!-- type và interface khác nhau thế nào -->

<!-- Sự linh hoạt: -->
<!--
  Type: Type cho phép bạn định nghĩa kiểu dữ liệu cho bất kỳ loại dữ liệu nào, bao gồm cả các kiểu nguyên thủy, union type, tuple, literal type và các kiểu tự định nghĩa.
  Interface: Interface thường được sử dụng để định nghĩa kiểu dữ liệu cho các đối tượng (object) có cấu trúc cụ thể, bao gồm các thuộc tính và phương thức.
-->

<!-- Extend và Implements -->
<!--
  Type: Type không hỗ trợ khái niệm "extends" hay "implements", tức là bạn không thể mở rộng hoặc triển khai một Type từ một Type khác.
  Interface: Interface cho phép bạn sử dụng "extends" để mở rộng từ một interface khác, và sử dụng "implements" để triển khai một interface trong một lớp (class).
 -->

<!-- Kế thừa multiple -->
<!--
  Type: Type hỗ trợ union type, cho phép bạn kết hợp nhiều kiểu dữ liệu lại với nhau, nhưng không thể kế thừa các thuộc tính từ nhiều Type.
  Interface: Interface hỗ trợ kế thừa từ nhiều interface, cho phép bạn kết hợp các thuộc tính và phương thức từ nhiều interface vào một interface mới.
 -->

 <!-- Mở rộng kiểu dữ liệu tồn tại -->
<!--
  Type: Type cho phép bạn tạo lại kiểu dữ liệu tồn tại bằng các kỹ thuật như union type, intersection type và mapped type.
  Interface: Interface không cho phép bạn tạo lại một interface tồn tại, bạn chỉ có thể mở rộng từ một interface khác để thêm các thuộc tính hoặc phương thức mới.
 -->
