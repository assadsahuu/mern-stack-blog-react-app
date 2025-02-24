import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiUser } from 'react-icons/hi'


function DashSidebar() {
    const location = useLocation();
    const [tab, setTab] = useState('');


    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');

        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);
    return (
        <Sidebar className="w-full md:w-56">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to='/Dashboard?tab=profile'>
                        <Sidebar.Item as='div' active={tab === 'profile'} icon={HiUser} label={'User'} labelColor='dark'>Profile</Sidebar.Item>
                    </Link>
                    <Sidebar.Item className='cursor-pointer' icon={HiArrowSmRight} >Sign Out</Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default DashSidebar