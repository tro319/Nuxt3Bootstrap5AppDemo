<template>
  <div id="header">
  <Navbar
    expand="lg"
    theme="light"
    background-color="light"
  >
    <Container type="fluid">
      <h1><NavLink to="/">上賀茂飲食店巡り</NavLink></h1>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList>
          <NavItem>
            <NavLink to="/pagesin/imaishoku">
              今井食堂
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/pagesin/mokkosu">
              肥後もっこす
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/pagesin/thukuthuku">
              TUKTUK
            </NavLink>
          </NavItem>
        </NavbarNavList>
      </NavbarCollapse>
    </Container>
  </Navbar>
</div>
</template>

