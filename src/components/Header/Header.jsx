import React from 'react';
import Logo from "@/assets/images/logo.svg"
import Avatar from "@/assets/images/image-avatar.png"
import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';
import CloseIcon from '@/components/icons/CloseIcon';
import { useState } from 'react';
//import styled from 'styled-components';

const Header = () => {
	const menuClose = "hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0"
	const menuOpen = "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-5 bg-white p-8 font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0"
	
	const [navClass, setNavClass] = useState(menuClose)

	const handleOpenMenu = () => {
		setNavClass(menuOpen)
	}

	const handleCloseMenu = () => {
		setNavClass(menuClose)
	}

	return (
		<header className='container mx-auto flex gap-4 items-center px-4 py-8'>
			<button className='md:hidden' onClick={handleOpenMenu}>
				<MenuIcon/>
			</button>
			<img src={Logo} alt="" className='mr-auto mb-1 h-5 md:mr-0'/>
			<nav className={navClass}
			>
				<button className='mb-8 md:hidden' onClick={handleCloseMenu}>
					<CloseIcon/>
				</button>
				<a href="#">Collection</a>
				<a href="#">Me</a>
				<a href="#">Women</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</nav>
			<div className='flex gap-4'>
				<button>
					<CartIcon/>
				</button>
				<img src={Avatar} alt="" className='w-10'/>
			</div>
		</header>
	);
};

//export const HeaderStyle = styled.div``;

export default Header;
