import {TextInter} from '@/components/atoms/typography/text-inter/text-inter';
import {TextTooDrunk} from '@/components/atoms/typography/text-linotype/text-linotype';
import portrait from '@/public/images/portrait.png';
import Image from 'next/image';
import React from 'react';

export default function InfoSection() {
    return (
        <div className="bg-[#FFB800] px-12 pt-24 pb-12 lg:p-36 xl:p-48 space-y-4">
            <div className="space-y-12">
                <TextTooDrunk className="text-black text-3xl lg:text-4xl xl:text-5xl">About...</TextTooDrunk>
                <div className=" lg:flex xl:flex items-center justify-center">
                    <Image src={portrait} width={400} height={400} alt="portrait" />
                    <div className="flex justify-center">
                        <TextInter className="text-black text-base lg:text-xl xl:text-2xl text-justify">
                            Anak INTJ berzodiak Leo yang sekarang lagi jadi mahasiswa Computer Science di Binus yang
                            bisa dibilang lagi krisis identitas...(?) mau nyebut kuliah di Binus Bandung tapi ngampusnya
                            malah di Binus Jakarta. Akhir-akhir ini lagi ada interest sama Frontend Development dan juga
                            Mobile Development. Sejujurnya lagi bingung mau yang mana yang lebih difokusin tapi yaudalah
                            jalanin dulu aja lah ya. Website ini jadi bentuk kegabutan ngotak-ngatik ngoding sekaligus
                            jadi wadah ngeekspresiin interest diri sendiri dan juga mungkin bakal jadi website portfolio
                            diri sendiri. Walaupun jujur ngerasa design website-nya agak alay (dan iya bener kalo notice
                            ini font-nya ada yang dari font game Persona 5) tapi yaudah ini website memang didesain
                            begini soalnya bosen sama tampilan website kebanyakan yang clean-clean gitu mulu (baca:
                            anaknya pengen beda dari yang lain).
                        </TextInter>
                    </div>
                </div>
            </div>
        </div>
    );
}
