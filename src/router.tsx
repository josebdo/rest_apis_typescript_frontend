import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, {loader as productsLoader, action as UpdateAvailabilityAction} from "./views/Products";
import NewProduct, {action as NewProductAction} from "./views/NewProduct";
import EditProduct, {loader as editProductLoader, action as editProductAction} from "./views/EditProduct";
import { action as deleteProductAction } from "./components/ProductDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action:UpdateAvailabilityAction
               
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: NewProductAction
            },
            {
                path:'productos/:id/editar', //road Pattern -
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path:'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
    }
])