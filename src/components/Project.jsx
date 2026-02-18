import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination} from "swiper/modules";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";

export default function Project() {
  const project = [
    {
      src: project1,
      title: "Website Desain Interior",
      description:
        "Website desain interior modern yang menampilkan portofolio proyek, layanan, dan konsep ruang dengan tampilan elegan.",
      link: "https://web-desain-interior.vercel.app/",
    },
    {
      src: project2,
      title: "Website Livescore",
      description:
        "Website menampilkan hasil pertandingan olahraga secara langsung (real-time). Berisi skor terkini, waktu pertandingan, atau klasemen.",
      link: "https://live-score-zeta.vercel.app",
    },
    {
      src: project3,
      title: "Website Anime",
      description:
        "Website Anime menyediakan informasi lengkap mengenai anime dan manga, seperti sinopsis, studio, genre, jumlah episode, serta rating dari anime tersebut.",
      link: "https://anime-website-umber.vercel.app/",
    },
    {
      src: project4,
      title: "Sistem Informasi Perumahan",
      description:
        "Aplikasi manajemen keuangan iuran dan pengeluaran RT di perumahan. Fungsinya pengelolaan penghuni, rumah, pembayaran, serta laporan keuangan dalam bentuk grafik.",
      link: "https://github.com/IrhamIzza/Sistem_Informasi_Perumahan_FrontEnd",
    },
    {
      src: project5,
      title: "Website PT Jaya Berseri",
      description:
        "Website perusahaan untuk memperkenalkan kepada masyarakat umum tentang produk pupuk pertanian dalam mengatasi kelangkaan pupuk subsidi.",
      link: "https://github.com/IrhamIzza/Jaya_Berseri_FrontEnd",
    },
    {
      src: project6,
      title: "Website Movie",
      description:
        "Website pencarian movie ini memudahkan menemukan informasifilm dari judul. Dilengkapi dengan detail film",
      link: "https://irhamizza.github.io/Website_Movie/",
    },
    {
      src: project7,
      title: "Website Granesia",
      description:
        "Website informasi tata cara menanam bermacam-macam tanaman hias dalam bentuk artikel yang dapat dijadikan referensi bagi pengguna untuk merawat dan budidaya.",
      link: "https://github.com/IrhamIzza/Website_Granesia",
    },
  ];

  return (
    <div className="px-30 py-10">
      <div className="flex flex-col ">
        <h1 className="text-3xl font-bold text-center"> <span className="text-primary">My</span> Project</h1>
        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 10000 }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {project.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="pt-5 pb-10 ">
                  <div className="group relative overflow-hidden flex flex-col gap-2 bg-white rounded-lg  p-3 shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                    <div className="">
                      <img
                        src={item.src}
                        loading="lazy"
                        className="w-full h-45 object-contain rounded-2xl border-1 border-secondary"
                      />
                    </div>
                    <div className="flex justify-between items-center ">
                      <div className="h-30 flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-black">
                          {item.title}
                        </h1>
                        <p className="text-gray-800 leading-tight">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className="
                        absolute inset-0
                        bg-linear-to-t from-secondary/80 from-40%
                        translate-y-full
                        group-hover:translate-y-0
                        transition-transform duration-300 ease-out
                        flex items-end justify-center
                    "
                    >
                      <a href={item.link}  target="_blank">
                        <i className="text-6xl ph ph-arrow-square-in absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full cursor-pointer hover:text-primary transition-all ease-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
