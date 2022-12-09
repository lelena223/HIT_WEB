var:
- Có thể khai báo đa dạng các kiểu biến như number, string, boolean, etc (Trừ trường hợp được khai báo bên trong 1 function (khi đó biến var sẽ có scope là function/locally scoped), biến var sẽ có scope là globally scoped ).
- Đặc biệt, biến var còn có tính chất hoisting: nghĩa là dù khai báo ở đâu thì biến đều sẽ được đem lên đầu scope trước khi code được thực hiện.

let:
- Biến let được khai báo sẽ có scope là block scoped chứ không phải globally hay locally scoped.
- Let cho phép cập nhật giá trị của biến chứ không cho phép tái khái báo lại biến đó.
- Giống với var, let cũng có tính hoisting tuy nhiên lại khác nhau ở chỗ thay vì var được khởi tạo với giá trị là undefined thì let sẽ không có bất kỳ giá trị khởi tạo nào.
- Điều này dẫn đến việc nếu sử dụng biến let trước khi khai báo thì sẽ gặp lỗi Reference Error.

const:
- Tương tự với let cũng có scope là block scoped, và hoisting.
- Trong biến const nếu trường hợp kiểu của biến là primitive (bao gồm string, number, boolean, null, và undefined) thì sẽ không thể tái khai báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến.
- Đối với trường hợp kiểu biến là reference (bao gồm object, array, và function) thì không thể tái khai báo hay cập nhật giá trị của biến nhưng vẫn có thể cập nhật giá trị cho thuộc tính của biến đó.