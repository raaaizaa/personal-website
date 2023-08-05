import {Card, CardBody, CardFooter, CardHeader, Image} from '@nextui-org/react';
import React from 'react';
import {TextInter} from '../typography/text-inter/text-inter';
import Link from 'next/link';

interface cardProps {
    name: string;
    artist: string;
    playcount: string;
    image: string;
    url: string;
}

export default function LastFmCard({name, artist, playcount, image, url}: cardProps) {
    return (
        <Card className="hover:scale-[1.05] bg-[#0F0F0F] rounded-2xl hover:bg-[#1E1E1E] active:bg-[#1E1E1E] ease-linear duration-150">
            <Link href={url} target="_blank">
                <CardBody className="">
                    <Image src={image} className="rounded-t-2xl" />
                </CardBody>
                <CardFooter className="block items-center text-center py-2">
                    <TextInter className="text-sm md:text-base">{name}</TextInter>
                    <TextInter className="text-sm md:text-base">{artist}</TextInter>
                    <TextInter className="text-sm md:text-base">
                        {playcount == '1' ? `${playcount} scrobble` : `${playcount} scrobbles`}
                    </TextInter>
                </CardFooter>
            </Link>
        </Card>
    );
}
