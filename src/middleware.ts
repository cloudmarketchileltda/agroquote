import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Excluir archivos estáticos, api y la página de login
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/login' ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // En una app real, verificaríamos un token o cookie
  // Para la maqueta, podemos simular que el usuario no está logueado
  // si no existe una cookie específica.
  const session = request.cookies.get('agroquote-session');

  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
