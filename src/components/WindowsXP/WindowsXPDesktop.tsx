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
  const [bilheteAberto, setBilheteAberto] = useState(false);

  const openWindow = (windowId: string) => {
    setOpenWindows(prev => ({ ...prev, [windowId]: true }));
    
    // Se abrir o bilhete, marcar como aberto para revelar a pasta CONFIDENCIAL_SOFIA
    if (windowId === 'bilhete' && !bilheteAberto) {
      setBilheteAberto(true);
    }
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
          {bilheteAberto && (
            <DesktopIcon
              icon={folderIcon}
              title="CONFIDENCIAL_SOFIA"
              onClick={() => openWindow('confidencial')}
            />
          )}
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
          <p className="mb-4">
            Se algo acontecer comigo, vá até 'CONFIDENCIAL_SOFIA'. A verdade está lá.
          </p>
          <p className="mb-4">
            Não confie em ninguém da redação.
          </p>
          <p>— Sofia</p>
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
          <h3 className="font-bold text-lg mb-4 text-red-600">🗂️ CONFIDENCIAL_SOFIA</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer border rounded">
              <img src={txtIcon} alt="Arquivo" className="w-4 h-4" />
              <span className="text-sm font-bold">01_RM_06_JUN.txt</span>
            </div>
            <div className="bg-gray-50 p-3 text-xs font-mono border rounded">
              <p className="mb-2"><strong>Douglas P.</strong> aparece em 3 contratos com a Secretaria de Esporte — total estimado: <strong>R$ 240.000,00</strong>.</p>
              <p className="mb-2">Data: 04/04 — assinatura sem licitação.</p>
              <p className="mb-2">Fonte: cruzamento entre portais de transparência e PDFs internos.</p>
              <p className="mb-2 text-red-600"><strong>C. Braga</strong> avisou: "tem gente perigosa nesse meio".</p>
              <p className="mb-2 text-red-600"><strong>L. Paiva</strong> sugeriu deletar o material antes da publicação.</p>
              <p className="text-red-600">Backup desativado manualmente. Última cópia segura: pen drive vermelho (sumido).</p>
            </div>
            
            <div className="flex items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer border rounded">
              <img src={txtIcon} alt="Arquivo" className="w-4 h-4" />
              <span className="text-sm font-bold">02_Nota_Pessoal.txt</span>
            </div>
            <div className="bg-gray-50 p-3 text-xs font-mono border rounded">
              <p className="mb-2">Camila disse que o material era perigoso demais.</p>
              <p className="mb-2">Luís pediu para apagar tudo antes da publicação.</p>
              <p className="mb-2">Backup desativado por segurança. Preciso confiar em alguém.</p>
              <p className="mb-2 text-red-600"><strong>Não estou segura.</strong></p>
              <p className="mb-2">Se eu não conseguir publicar…</p>
              <p className="text-red-600"><strong>Alguém precisa continuar isso.</strong></p>
            </div>

            <div className="flex items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer border rounded">
              <span className="text-sm">🔊</span>
              <span className="text-sm font-bold">AVISO_06_JUN.wav</span>
            </div>
            <div className="bg-red-50 p-3 text-xs border rounded border-red-300">
              <p className="mb-2 font-bold text-red-600">Transcrição de áudio:</p>
              <p className="mb-2 italic">"Você já passou dos limites. Apague tudo. Senão, vai acabar como aquela repórter do sul."</p>
              <p className="mb-1 text-red-600">Metadados ausentes.</p>
              <p className="mb-1 text-red-600">Horário de criação: 02h47 da madrugada da morte de Sofia</p>
              <p className="text-red-600">IP logado no e-mail: não corresponde à rede da casa</p>
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
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer border rounded">
                <img src={txtIcon} alt="Arquivo" className="w-4 h-4" />
                <span className="text-sm font-bold">rascunho_desabafo.txt</span>
              </div>
              <div className="bg-gray-100 p-2 text-xs font-mono border rounded">
                "Estou com medo. Tem gente envolvida que eu nunca imaginaria. Não é só o Douglas. Alguém mais quer calar essa história."
              </div>
              
              <div className="flex items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer border rounded">
                <span className="text-sm">🖼️</span>
                <span className="text-sm font-bold">print_email_ameaça.png</span>
              </div>
              <div className="bg-red-50 p-2 text-xs border rounded border-red-300">
                <p className="text-red-600 font-bold">Assunto: PARE ENQUANTO É TEMPO</p>
                <p className="text-gray-600 italic">[Imagem desfocada - conteúdo ilegível]</p>
              </div>

              <div className="flex items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer border rounded">
                <img src={txtIcon} alt="Arquivo" className="w-4 h-4" />
                <span className="text-sm font-bold">carta_nao_enviada.txt</span>
              </div>
              <div className="bg-gray-100 p-2 text-xs font-mono border rounded">
                "Camila, se você estiver me enganando… espero que entenda que eu só queria a verdade."
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
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer border rounded">
              <img src={txtIcon} alt="Arquivo" className="w-4 h-4" />
              <span className="text-sm font-bold">diario_abril.txt</span>
            </div>
            <div className="bg-gray-50 p-3 text-xs font-mono border rounded">
              "Ricardo me ligou de novo. Disse que sente falta, mas eu não acredito mais. Ele ficou estranho desde que comecei a investigar."
            </div>

            <div className="flex items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer border rounded">
              <span className="text-sm">📷</span>
              <span className="text-sm font-bold">foto_sofia_camila.png</span>
            </div>
            <div className="bg-blue-50 p-3 text-xs border rounded border-blue-300">
              <p className="text-blue-600 italic">Imagem de Sofia e Camila sorrindo na redação</p>
              <p className="text-gray-600 text-xs mt-1">[Pode contrastar com a desconfiança futura]</p>
            </div>

            <div className="flex items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer border rounded">
              <img src={txtIcon} alt="Arquivo" className="w-4 h-4" />
              <span className="text-sm font-bold">nota_de_mesa.txt</span>
            </div>
            <div className="bg-gray-50 p-3 text-xs font-mono border rounded">
              "Lúcia cancelou o almoço. Disse que estava gripada, mas parecia nervosa ontem."
              <p className="text-red-600 text-xs mt-1">⚠️ Sugere algo sobre a irmã</p>
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