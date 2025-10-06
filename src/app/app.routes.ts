import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        // Rota vazia (a URL raiz, ex: '/')
        path: '',
        // Ação: Redireciona o usuário para 'cadastrar-paciente'
        redirectTo: 'cadastrar-paciente',
        // Garante que o Angular corresponda ao caminho exato e não a sub-rotas
        pathMatch: 'full'
    },
    {
        path: 'cadastrar-paciente',
        // Usando Lazy Loading com loadComponent
        loadComponent: () =>
            import('./cadastrar-paciente/cadastrar-paciente')
                .then(m => m.CadastrarPaciente)
    },
    {
        path: 'add-paciente',
        // Usando Lazy Loading com loadComponent
        loadComponent: () =>
            import('./add-paciente/add-paciente')
                .then(m => m.AddPaciente)
    },
    {
        path: 'chamar-paciente',
        // Usando Lazy Loading com loadComponent
        loadComponent: () =>
            import('./chamar-paciente/chamar-paciente')
                .then(m => m.ChamarPaciente)
    },

];
