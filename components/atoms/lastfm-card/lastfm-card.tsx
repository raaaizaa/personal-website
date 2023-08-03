import {Card, CardBody, CardFooter, CardHeader, Image} from '@nextui-org/react';
import React from 'react';
import {TextInter} from '../typography/text-inter/text-inter';

interface cardProps {
    name: string;
    artist: string;
    playcount: string;
    image: string;
}

export default function LastFmCard({name, artist, playcount, image}: cardProps) {
    return (
        <Card className="bg-[#0F0F0F] rounded-2xl hover:bg-[#1E1E1E] active:bg-[#1E1E1E] ease-in duration-150">
            <CardBody className="">
                <Image src={image} className="rounded-t-2xl" />
            </CardBody>
            <CardFooter  className="block text-center py-2">
                <TextInter>{name}</TextInter>
                <TextInter>{artist}</TextInter>
                <TextInter>{playcount} scrobbles</TextInter>
            </CardFooter>
        </Card>
    );
}
