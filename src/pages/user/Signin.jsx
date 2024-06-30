
export default function Signin() {
  
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="rounded-2xl border bg-white text-gray-900 shadow-sm w-full max-w-md">
        <div className="flex flex-col text-center space-y-1.5 p-6">
          <h3 className="whitespace-nowrap font-bold tracking-tight text-2xl">Sign in to your account</h3>
          <p className="text-sm text-gray-500">Welcome back!</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none cursor-not-allowed opacity-70" htmlFor="email">
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none cursor-not-allowed opacity-70" htmlFor="password">
              Password
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="password"
              placeholder="Enter a secure password"
              required
              type="password"
            />
          </div>
        </div>
        <div className="p-6 flex items-center justify-between">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-indigo-900 h-10 px-4 py-2 w-full"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500 mb-5">
          Create an account? <a className="underline" href="/signup">Sign up</a>
        </div>
      </div>
    </div>
    );
};
