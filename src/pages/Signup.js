import React from "react";

function Signup() {
  return (
    <div class="w-full mx-auto py-10 max-w-md">
			<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2">
						Username
					</label>
					<input 
						class="shadow appearance-none border roded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"un
						type="text"
						id="username"
						placeholder="Username" />
				</div>
        <div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2">
						Email
					</label>
					<input 
						class="shadow appearance-none border roded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"un
						type="text"
						id="username"
						placeholder="Email" />
				</div>
				<div class="mb-2">
					<label class="block text-gray-700 text-sm font-bold mb-2">
						Password
					</label>
					<input 
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
						type="text"
						id="password"
						placeholder="Password" />
				</div>
        <div class="mb-2">
					<label class="block text-gray-700 text-sm font-bold mb-2">
						Confirm Password
					</label>
					<input 
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
						type="text"
						id="confirm-password"
						placeholder="Confirm Password" />
				</div>
				<div class="flex items-center justify-between">
					<button class="md:w-2/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Sign Up
					</button>
				</div>
			</form>
			<p class="text-center text-gray-500 text-xs">
				&copy;2019 Portal. All rights reserved.
			</p>
	  </div>
  );
}

export default Signup;