import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: '', redirectTo: '/ingresos', pathMatch: 'full' },
    {
        path: 'ingresos',
        loadChildren: () => import('./ingresos/ingresos.module').then(m => m.IngresosModule)
    },
    {
        path: 'egresos',
        loadChildren: () => import('./egresos/egresos.module').then(m => m.EgresosModule)
    },
    {
        path: 'traslados',
        loadChildren: () => import('./traslados/traslados.module').then(m => m.TrasladosModule)
    },
    {
        path: 'pagos',
        loadChildren: () => import('./pagos/pagos.module').then(m => m.PagosModule)
    },
    {
        path: 'nomina',
        loadChildren: () => import('./nomina/nomina.module').then(m => m.NominaModule)
    },
    {
        path: 'clientes',
        loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
    },
    {
        path: 'prodserv',
        loadChildren: () => import('./prod-serv/prod-serv.module').then(m => m.ProdServModule)
    },
    {
        path:'unimed',
        loadChildren:()=>import('./uni-med/uni-med.module').then(m=>m.UniMedModule)
    },
    {
        path: 'lotes',
        loadChildren: () => import('./lotes/lotes.module').then(m => m.LotesModule)
    },
    {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule { }