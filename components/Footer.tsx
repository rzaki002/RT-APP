"use client";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-gray-600 dark:text-gray-300 pt-12 pb-8 border-t border-gray-200 dark:border-gray-700">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid atas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Tentang */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">RT-APP</h2>
            <p className="text-sm">
              Aplikasi digital untuk pengelolaan administrasi RT secara modern, efisien, dan transparan.
            </p>
          </div>

          {/* Link Navigasi */}
          <div>
            <h3 className="text-md font-semibold mb-2">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Beranda</a></li>
              <li><a href="#" className="hover:underline">Tentang Kami</a></li>
              <li><a href="#" className="hover:underline">Kontak</a></li>
              <li><a href="#" className="hover:underline">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Kontak / Media Sosial */}
          <div>
            <h3 className="text-md font-semibold mb-2">Kontak</h3>
            <p className="text-sm mb-2">Email: rt-app@example.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-600">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="hover:text-pink-500">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>

        {/* Garis pembatas */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} RT-APP. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
