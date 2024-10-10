import { useState } from "react"
import "./App.css"

function App() {

  return (
    <>
      <h1>Bao Cao</h1>
      <h2 className="my-5">Cac chi so chat luong benh vien 2022</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Đặc tính</th>
              <th>Chỉ số (Đơn vị tính)</th>
              <th>Khoa (Phòng)</th>
              <th>Chu kỳ đo lường</th>
              <th>Chỉ tiêu 2022</th>
              <th>Kết quả 2022</th>
            </tr>
          </thead>
          <tbody>
            <tr rowSpan="2">
              <td rowSpan="2">1</td>
              <td rowSpan={2}>Nang luc chuyen mon </td>
              <td>
                1. Ty le thuc hien ki thuat chuyen mon theo phan tuyen kham chua
                benh
              </td>
              <td>KHTH</td>
              <td>Quy</td>
              <td>{`>60%`}</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>2. Ty le phau thuat tu loai II tro len</td>
              <td>Gay me hoi suc</td>
              <td>Quy</td>
              <td>{`>65%`} </td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan={4}>2</td>
              <td rowSpan={4}>An toan (4 chi so)</td>
              <td>3. Ty le nhiem khuan vet mo</td>
              <td>KS Nhiem Khuan</td>
              <td>Quy</td>
              <td>{`<1%`}</td>
              <td>0,48%</td>
            </tr>
            <tr>
              <td>4. Ty le nhiem khuan benh vien (viem phoi)</td>
              <td>KS Nhiem Khuan</td>
              <td>Quy</td>
              <td>{`>5%`}</td>
              <td>18,8%</td>
            </tr>
            <tr>
              <td>5. So su co y khoa nghiem trong</td>
              <td>QLCL</td>
              <td>6 thang</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>6. So su co ngoai y khoa nghiem trong</td>
              <td>QLCL</td>
              <td>6 thang</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td rowSpan={4}>3</td>
              <td rowSpan={4}>Hieu suat (4 chi so)</td>
              <td>7. Thoi gian kham benh trung binh cua nguoi benh (phut)</td>
              <td>Khoa Kham & QLDT</td>
              <td>6 thang</td>
              <td>{`<45 phut`}</td>
              <td>phut</td>
            </tr>
            <tr>
              <td>8. Thoi gian nam benh trung binh cua nguoi benh (ngay)</td>
              <td>KHTH</td>
              <td>Quy</td>
              <td>{`>14`}</td>
              <td>13 ngay</td>
            </tr>
            <tr>
              <td>9. Cong suat su dung giuong benh thuc te (%)</td>
              <td>KHTH</td>
              <td>Quy</td>
              <td>80-100%</td>
              <td>84.6%</td>
            </tr>
            <tr>
              <td>10. Hieu suat su dung phong mo</td>
              <td>Gay me hoi suc</td>
              <td>Quy</td>
              <td>80-100%</td>
              <td>%</td>
            </tr>
            <tr>
              <td rowSpan={2}>4</td>
              <td rowSpan={2}>Hieu suat (2 chi so)</td>
              <td>
                11. Ti le tu vong va tien luong tu vong gia dinh xin chia ve (tat ca
                cac benh) (%)
              </td>
              <td>KHTH</td>
              <td>Quy</td>
              <td>{`<10%`}</td>
              <td>7.4%</td>
            </tr>
            <tr>
              <td>
                12. Ti le chuyen len tuyen tren kham chua benh (tat ca cac benh){" "}
              </td>
              <td>KHTH</td>
              <td>6 thang</td>
              <td></td>
              <td>0</td>
            </tr>
            <tr>
              <td rowSpan={2}>5</td>
              <td rowSpan={2}>Huong den nhan vien (2 chi so)</td>
              <td>13. Ti le tai nan thuong tich do vat sac nhon</td>
              <td>P. Dieu duong</td>
              <td>6 thang</td>
              <td>{`<10`}</td>
              <td>7.6%</td>
            </tr>
            <tr>
              <td>14. Ti le tiem phong viem gan B trong nhan vien y te </td>
              <td>Y te co quan</td>
              <td>Quy</td>
              <td>{`>20%`}</td>
              <td>50%</td>
            </tr>
            <tr>
              <td rowSpan={3}>6</td>
              <td rowSpan={3}>Huong den nguoi benh (2 chi so)</td>
              <td>15. Ti le hai long cua nhan vien y te (%) </td>
              <td>P. Dieu duong</td>
              <td>6 thang</td>
              <td>{`>80%`}</td>
              <td>85.86%</td>
            </tr>
            <tr>
              <td>
                16. Ti le hai long cua nguoi benh voi dich vu kham chua benh (noi
                tru) (%){" "}
              </td>
              <td>P. Dieu duong</td>
              <td>Quy</td>
              <td>{`>90%`}</td>
              <td>95.23%</td>
            </tr>
            <tr>
              <td>
                17. Ti le hai long cua nguoi benh voi dich vu kham chua benh (ngoai
                tru) (%){" "}
              </td>
              <td>P. Dieu duong</td>
              <td>Quy</td>
              <td>{`>90%`}</td>
              <td>96.25%</td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
    </>
  )
}

export default App
