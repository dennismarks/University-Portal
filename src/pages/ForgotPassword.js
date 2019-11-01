import React from "react";

function Login() {
	return (
		<div>
    	<div class="w-full mx-auto py-10 max-w-md">
			
			<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2">
						Enter your email to reset password.
					</label>
					<input 
						class="shadow appearance-none border roded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"un
						type="text"
						id="forgot-email"
						placeholder="Enter email" />
				</div>
				<div class="flex items-center justify-between">
					<button class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Reset Password
					</button>
				</div>
			</form>
			<p class="text-center text-gray-500 text-xs">
				&copy;2019 Portal. All rights reserved.
			</p>
	  </div>
	</div>
  );
}

export default Login;