import Image from 'next/image';
import react from 'react';
import assets from '../assets';

const aboutUS = () => {
  return (
    <div className="mx-20">
      <p className="my-10 text-3xl font-bold font-poppins">About US</p>
      <div className="relative w-full h-500">
        <Image
          className="rounded-lg"
          src={assets.bg3}
          alt="Chào mừng đến với nhóm 5"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="my-10">
        <div className="py-3 text-xl text-justify border-t-2 border-solid font-poppins border-prim-dark dark:border-white">
          NHÓM 5
          <p className="mt-5 mb-20 text-base">
            Tất cả thành viên đều là sinh viên trường Đại học Công nghệ Thông
            tin ĐHQG TP HCM, thuộc khoa Khoa học và Kỹ thuật Thông tin, lớp Công
            nghệ Chất lượng cao định hướng Nhật Bản và có cùng định hướng về
            Web. Trải nghiệm, áp dụng và thực hiện triển khai một Website trên
            mạng Internet, ứng dụng vào thực tiễn là cơ hội để nhóm có thể tự
            mình mày mò tìm hiểu, khai phá năng lực bản thân trong suốt quá
            trình vừa học vừa xây dựng web.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-5 py-16 text-center border-t-2 rounded-2xl border-prim-dark dark:border-white">
          <div className="flex flex-col items-center justify-center">
            <img
              className="mb-5 rounded-full"
              src="https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/252938250_1469386416780461_5835384178997990174_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fCywtA8RTeQAX--NhQP&_nc_ht=scontent-hkt1-2.xx&oh=00_AfCXXKbv3M2weyrTfKQk9GeOJyVyA00okVEVkNj2UMfOxw&oe=63995BD5"
              alt="Nguyễn Văn Chọn"
              width="50%"
            ></img>
            <div>
              <p className="mb-2 text-xl font-semibold">Nguyễn Văn Chọn</p>
              <p>Frontend Dev</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="mb-5 rounded-full"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGWRNPFuE6aLA/profile-displayphoto-shrink_800_800/0/1656143891661?e=1676505600&v=beta&t=K-xwDY_2xVIlN4PkX9zPn_S4eVRFxVsZxgexNP30BbE"
              alt="Lưu Huỳnh Phát"
              width="50%"
            ></img>
            <div>
              <p className="mb-2 text-xl font-semibold">Lưu Huỳnh Phát</p>
              <p>Fullstack Dev</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="mb-5 rounded-full"
              src="https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/272880268_626817418618980_1573065678081878384_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=LOGDesRQvYkAX_XJIU_&_nc_ht=scontent-hkt1-2.xx&oh=00_AfAC5B9a4S451Se_im4h0ce373WuuxHzXOdm_y652gZqqw&oe=639A9267"
              alt="Nguyễn Minh Quân"
              width="50%"
            ></img>
            <div>
              <p className="mb-2 text-xl font-semibold">Nguyễn Minh Quân</p>
              <p>Frontend Dev</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="mb-4 rounded-full"
              src="https://chocanh.vn/wp-content/uploads/cho-ngu-nhat-the-gioi-1.jpg"
              alt="Hoàng Tuấn Anh"
              width="50%"
            ></img>
            <div>
              <p className="mb-2 text-xl font-semibold">Hoàng Tuấn Anh</p>
              <p>Frontend Dev</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="mb-5 rounded-full"
              src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/179992532_128598702625355_4405256090229406103_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=m73sky3Yv9UAX9BQCl-&_nc_ht=scontent-hkt1-2.xx&oh=00_AfCg38-EouikC6MjL-EFWXIikbdUUxpSDgFg9lxSZyraVQ&oe=63BC323C"
              alt="Nguyễn Ngọc Mai Khanh"
              width="50%"
            ></img>
            <div>
              <p className="mb-2 text-xl font-semibold">
                Nguyễn Ngọc Mai Khanh
              </p>
              <p>Frontend Dev</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutUS;
