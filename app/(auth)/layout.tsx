
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="auth-layout">
            <section className= "auth-left-section scrollbar-hide-default">
              <link href="/"  className ="auth-logo">
                  <Image src="/assets/icons/logo.svg" alt="Signalist logo"
                         width={140} height={32} className='h-8 w-auto' />
              </link>
            </section>
        </main>
    )
}

export default Layout