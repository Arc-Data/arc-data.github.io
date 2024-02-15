function App() {
	return (
		<div className="max-w-screen-xl min-h-screen mt-12 mx-auto px-6 py-12 justify-center text-white flex flex-col md:flex-row sm:gap-10 md:gap-40 sm:text-center md:text-left">
			<div className="md:sticky md:top-40">
				<h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-cyan-400">Arc</h1>
				<p className="text-lg text-slate-400 md:mt-3">Graduating from college soon...</p>
				<p className="text-lg md:mt-3 text-slate-600">I build Full Stack Web Applications.</p>
				<div className="mt-4 md:mt-16 flex md:flex-col gap-4 justify-center">
					<div className="flex gap-4 items-center">
						<i className="fa-brands fa-github"></i>
						<p className="hidden md:block">Github</p>
					</div>
					<div className="flex gap-4 items-center">
						<i className="fa-brands fa-linkedin-in"></i>
						<p className="hidden md:block">LinkedIn</p>
					</div>
				</div>
			</div>
			<div className="md:flex-1">
				<div>
					<h2>About Me</h2>
					<p>Work in progress..</p>
				</div>
			</div>

		</div>
	)
}

export default App