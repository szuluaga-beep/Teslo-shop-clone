import { useContext, useState } from 'react'
import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { useRouter } from 'next/router'

import { AuthContext, UiContext } from "../../context"


export const SideMenu = () => {
    const router = useRouter()

    const { isMenuOpen, toogleSiMenu } = useContext(UiContext)
    const { user, isLoggedIn } = useContext(AuthContext)
    const [searchTerm, setSearchTerm] = useState('')

    const onSearchTerm = () => {
        // toogleSiMenu()
        if (searchTerm.trim().length === 0) return
        navigateTo(`/search/${searchTerm}`)
        setSearchTerm('')
    }

    const navigateTo = (url: string) => {
        toogleSiMenu()

        router.push(url)
    }


    return (
        <Drawer
            open={isMenuOpen}
            onClose={toogleSiMenu}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>

                    <ListItem>

                        <Input
                            autoFocus
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => e.code === 'Enter' ? onSearchTerm() : null}
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={onSearchTerm}
                                    >
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>

                    {
                        isLoggedIn && (
                            <>
                                <ListItem >
                                    <ListItemIcon>
                                        <AccountCircleOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Perfil'} />
                                </ListItem>

                                <ListItem >
                                    <ListItemIcon>
                                        <ConfirmationNumberOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Mis Ordenes'} />
                                </ListItem>
                            </>
                        )
                    }


                    <ListItemButton
                        onClick={() => navigateTo("/category/men")}
                        sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <MaleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Hombres'} />
                    </ListItemButton>

                    <ListItemButton
                        onClick={() => navigateTo("/category/women")}
                        sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <FemaleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Mujeres'} />
                    </ListItemButton>

                    <ListItemButton
                        onClick={() => navigateTo("/category/kid")}
                        sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <EscalatorWarningOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Niños'} />
                    </ListItemButton>

                    {
                        !isLoggedIn
                            ? (
                                <ListItemButton>
                                    <ListItemIcon>
                                        <VpnKeyOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Ingresar'} />
                                </ListItemButton>
                            )
                            : (
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LoginOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Salir'} />
                                </ListItemButton>
                            )
                    }





                    {
                        user?.role === "admin"
                        &&
                        (
                            <>
                                <Divider />
                                <ListSubheader>Admin Panel</ListSubheader>

                                <ListItemButton >
                                    <ListItemIcon>
                                        <CategoryOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Productos'} />
                                </ListItemButton>
                                <ListItemButton >
                                    <ListItemIcon>
                                        <ConfirmationNumberOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Ordenes'} />
                                </ListItemButton>

                                <ListItemButton >
                                    <ListItemIcon>
                                        <AdminPanelSettings />
                                    </ListItemIcon>
                                    <ListItemText primary={'Usuarios'} />
                                </ListItemButton>
                            </>
                        )
                    }

                </List>
            </Box>
        </Drawer>
    )
}