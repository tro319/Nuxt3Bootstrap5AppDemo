<template>
  <div id="header">
  <Navbar
    expand="lg"
    theme="light"
    background-color="light" class="p-3"
  >
    <Container type="fluid">
      <h1><NavLink class="text-dark fw-bold fs-1" to="/">上賀茂飲食店巡り</NavLink></h1>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList class="ms-5">
          <NavItem class="ms-3">
            <NavLink to="/pagesin/imaishoku" class="text-dark fs-4 p-2 m-1">
              今井食堂
            </NavLink>
          </NavItem>
          <NavItem class="ms-3">
            <NavLink to="/pagesin/mokkosu" class="text-dark fs-4 p-2 m-1">
              肥後もっこす
            </NavLink>
          </NavItem>
          <NavItem class="ms-3">
            <NavLink to="/pagesin/thukuthuku" class="text-dark fs-4 p-2 m-1">
              TUKTUK
            </NavLink>
          </NavItem>
        </NavbarNavList>
      </NavbarCollapse>
    </Container>
  </Navbar>
</div>
</template>

