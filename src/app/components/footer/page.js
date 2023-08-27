import React from 'react'
import {AiOutlineInstagram} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";
import Link from 'next/link';

export default function Footer() {
  return (
    <div>

<footer className=" px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<Link href="#" className="flex justify-center space-x-3 lg:justify-start">
				<span className="self-center text-2xl font-semibold">Company Name</span>
			</Link>
		</div>
		<div className="grid grid-cols-2 text-sm gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracki uppercase dark:text-gray-50">College</h3>
				<ul className="space-y-1">
					<li>
						<Link href="#">Link</Link>
					</li>
					<li>
					    <Link href="#">Link</Link>
					</li>
					<li>
					    <Link href="#">Link</Link>
					</li>
					
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracki uppercase dark:text-gray-50">Cources</h3>
				<ul className="space-y-1">
					<li>
					    <Link href="#">Link</Link>
					</li>
					<li>
					    <Link href="#">Link</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase dark:text-gray-50">Terms and Condition</h3>
				<ul className="space-y-1">
					<li>
					    <Link href="#">Link</Link>
					</li>
					<li>
					    <Link href="#">Link</Link>
					</li>
					<li>
					   <Link href="#">Link</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase dark:text-gray-50">Social media</div>
				<div className="flex justify-start space-x-3">
					<Link rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
						<AiFillFacebook size={23}/>
					</Link>
					
					<Link rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
					<AiOutlineInstagram  size={24}/>
					</Link>
				</div>
			</div>
		</div>
	</div>
	<div className="  mx-auto py-6 bg-gray-800 text-sm text-center text-purple-50	">© 1968 Company Co. All rights reserved.</div>
</footer>
      
    </div>
  )
}
