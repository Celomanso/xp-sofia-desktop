import { useState } from "react";
import { DesktopIcon } from "./DesktopIcon";
import { WindowXP } from "./WindowXP";
import blissWallpaper from "@/assets/bliss-wallpaper.jpg";
import txtIcon from "@/assets/txt-icon.png";
import folderIcon from "@/assets/folder-icon.png";
import wordIcon from "@/assets/word-icon.png";
import recycleBinIcon from "@/assets/recycle-bin-icon.png";

export const WindowsXPDesktop = () => {
  const [openWindows, setOpenWindows] = useState<Record<string, boolean>>({});

  const openWindow = (windowId: string) => {
    setOpenWindows(prev => ({ ...prev, [windowId]: true }));
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(prev => ({ ...prev, [windowId]: false }));
  };

  return (
    <div 
      className="h-screen w-screen relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${blissWallpaper})` }}
    >
      {/* Desktop Icons */}
      <div className="absolute inset-0 p-4">
        <div className="grid grid-cols-1 gap-4 w-fit">
          <DesktopIcon
            icon={txtIcon}
            title="Bilhete.txt"
            onClick={() => openWindow('bilhete')}
          />
          <DesktopIcon
            icon={folderIcon}
            title="CONFIDENCIAL_SOFIA"
            onClick={() => openWindow('confidencial')}
          />
          <DesktopIcon
            icon={wordIcon}
            title="doc.doc"
            onClick={() => openWindow('documento')}
          />
          <DesktopIcon
            icon={recycleBinIcon}
            title="Lixeira"
            onClick={() => openWindow('lixeira')}
          />
          <DesktopIcon
            icon={folderIcon}
            title="Pessoal"
            onClick={() => openWindow('pessoal')}
          />
        </div>
      </div>

      {/* Windows */}
      <WindowXP
        title="Bilhete.txt - Bloco de notas"
        isOpen={openWindows.bilhete}
        onClose={() => closeWindow('bilhete')}
        width={500}
        height={400}
        x={150}
        y={100}
      >
        <div className="font-mono text-sm">
          <p className="mb-4">Sofia,</p>
          <p className="mb-4">
            Não esqueça da reunião com o editor-chefe amanhã às 14h.
            Leve todas as evidências sobre o caso que estamos investigando.
          </p>
          <p className="mb-4">
            Os documentos estão na pasta CONFIDENCIAL_SOFIA.
            Cuidado com quem você confia essas informações.
          </p>
          <p className="mb-4">
            A verdade sempre vem à tona.
          </p>
          <p>- M.</p>
        </div>
      </WindowXP>

      <WindowXP
        title="CONFIDENCIAL_SOFIA"
        isOpen={openWindows.confidencial}
        onClose={() => closeWindow('confidencial')}
        width={600}
        height={450}
        x={200}
        y={150}
      >
        <div>
          <h3 className="font-bold text-lg mb-4 text-red-600">PASTA CONFIDENCIAL</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-bold">Investigação: Caso Empresário</h4>
              <p className="text-sm mt-2">
                Evidências coletadas sobre esquema de corrupção envolvendo 
                contratos públicos. Documentos fiscais, gravações de áudio 
                e depoimentos de testemunhas.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-bold">Fontes Protegidas</h4>
              <p className="text-sm mt-2">
                Lista de contatos que forneceram informações sensíveis.
                Identidades protegidas sob sigilo jornalístico.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold">Cronologia dos Fatos</h4>
              <p className="text-sm mt-2">
                Timeline detalhada dos eventos de janeiro a dezembro de 2024.
                Inclui datas, locais e pessoas envolvidas.
              </p>
            </div>
          </div>
        </div>
      </WindowXP>

      <WindowXP
        title="doc.doc - Microsoft Word"
        isOpen={openWindows.documento}
        onClose={() => closeWindow('documento')}
        width={650}
        height={500}
        x={250}
        y={120}
      >
        <div>
          <div className="mb-4 p-2 bg-gray-100 border">
            <small className="text-gray-600">Microsoft Word - Documento</small>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-center">
              ARTIGO: "A VERDADE POR TRÁS DOS CONTRATOS"
            </h2>
            <p className="text-sm italic text-center">Por Sofia Oliveira - Jornalista Investigativa</p>
            
            <div className="space-y-3 mt-6">
              <p>
                Nossa investigação de seis meses revelou um esquema sofisticado 
                de direcionamento de licitações públicas que pode ter desviado 
                milhões dos cofres municipais.
              </p>
              <p>
                As evidências coletadas mostram um padrão suspeito de contratos 
                sempre vencidos pelas mesmas empresas, com valores superfaturados 
                e especificações técnicas direcionadas.
              </p>
              <p>
                <strong>Principais descobertas:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Sobrepreço médio de 40% em relação ao mercado</li>
                <li>Participação de empresas fantasma em licitações</li>
                <li>Documentos com assinaturas suspeitas</li>
                <li>Triangulação de recursos entre contas</li>
              </ul>
              <p>
                A reportagem completa será publicada domingo na primeira página.
              </p>
            </div>
          </div>
        </div>
      </WindowXP>

      <WindowXP
        title="Lixeira"
        isOpen={openWindows.lixeira}
        onClose={() => closeWindow('lixeira')}
        width={450}
        height={350}
        x={180}
        y={200}
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={recycleBinIcon} alt="Lixeira" className="w-8 h-8" />
            <h3 className="font-bold">Lixeira</h3>
          </div>
          <div className="border border-gray-300 p-4 bg-gray-50 min-h-48">
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer">
                <img src={txtIcon} alt="Arquivo" className="w-4 h-4" />
                <span className="text-sm">rascunho_artigo_old.txt</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer">
                <img src={folderIcon} alt="Pasta" className="w-4 h-4" />
                <span className="text-sm">backup_antigo</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer">
                <img src={wordIcon} alt="Word" className="w-4 h-4" />
                <span className="text-sm">entrevista_cancelada.doc</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-600">
            3 itens na lixeira
          </div>
        </div>
      </WindowXP>

      <WindowXP
        title="Pessoal"
        isOpen={openWindows.pessoal}
        onClose={() => closeWindow('pessoal')}
        width={500}
        height={400}
        x={300}
        y={160}
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={folderIcon} alt="Pasta" className="w-8 h-8" />
            <h3 className="font-bold">Pasta Pessoal</h3>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold">Sobre Sofia</h4>
              <p className="text-sm mt-2">
                Jornalista investigativa com 8 anos de experiência. 
                Especializada em casos de corrupção e transparência pública.
                Prêmio Nacional de Jornalismo Investigativo 2023.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold">Hobbies</h4>
              <p className="text-sm mt-2">
                Fotografia, leitura de romances policiais, 
                caminhadas no parque e colecionar plantas suculentas.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-bold">Filosofia de Trabalho</h4>
              <p className="text-sm mt-2">
                "O jornalismo é a primeira versão da história. 
                Nossa responsabilidade é garantir que seja precisa e justa."
              </p>
            </div>
          </div>
        </div>
      </WindowXP>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-blue-600 to-blue-500 border-t-2 border-blue-300 flex items-center px-2">
        <button className="xp-button px-3 py-1 text-xs font-bold">
          Iniciar
        </button>
        <div className="flex-1"></div>
        <div className="text-white text-xs">
          {new Date().toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  );
};