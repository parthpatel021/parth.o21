import Image from 'next/image';
import { FC } from 'react';

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className="">
            <Image
                alt="Parthkumar Patel"
                src="/images/profilePic.jpg"
                width={120}
                height={120}
                className="object-cover border-4 h-[120px] border-white rounded-full shadow-md"
            />
        </div>
    );
};

export default ProfilePic;
