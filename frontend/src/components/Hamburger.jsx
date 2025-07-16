

export const Hamburger = ({isMenuOpen, handleMenuToggle}) => {
    return <div className="md:hidden">
        <button
            onClick={handleMenuToggle}
            type="button"
            className="inline-flex items-center p-2 rounded-md text-white hover:bg-gray-900"
        >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
        </button>
    </div>
}