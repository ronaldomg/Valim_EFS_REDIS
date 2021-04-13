/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:17:37.44
*/
gx.evt.autoSkip = false;
gx.define('havisoerrowebservice', false, function () {
   this.ServerClass =  "havisoerrowebservice" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A9116ErroWebServiceEmpresaId=gx.fn.getControlValue("ERROWEBSERVICEEMPRESAID") ;
      this.AV28ErroWebServiceEmpresaId=gx.fn.getControlValue("vERROWEBSERVICEEMPRESAID") ;
      this.A9117ErroWebServicePDV=gx.fn.getIntegerValue("ERROWEBSERVICEPDV",'.') ;
      this.A9118ErroWebServiceSequencia=gx.fn.getIntegerValue("ERROWEBSERVICESEQUENCIA",'.') ;
      this.A9111ErroWebServiceNoVendaFcx=gx.fn.getIntegerValue("ERROWEBSERVICENOVENDAFCX",'.') ;
      this.A9112ErroWebServiceMensagem=gx.fn.getControlValue("ERROWEBSERVICEMENSAGEM") ;
      this.A9114ErroWebServiceData=gx.fn.getDateValue("ERROWEBSERVICEDATA") ;
      this.A11815LogNFCeEmpresaId=gx.fn.getControlValue("LOGNFCEEMPRESAID") ;
      this.A11816LogNFCePDV=gx.fn.getIntegerValue("LOGNFCEPDV",'.') ;
      this.A11818LogNFCeSequencia=gx.fn.getIntegerValue("LOGNFCESEQUENCIA",'.') ;
      this.A11817LogNFCeSaidaId=gx.fn.getIntegerValue("LOGNFCESAIDAID",'.') ;
      this.A11823LogNFCeMensagem=gx.fn.getControlValue("LOGNFCEMENSAGEM") ;
      this.A11822LogNFCeDtHoraAutori=gx.fn.getDateTimeValue("LOGNFCEDTHORAAUTORI") ;
      this.AV34SdtAvisoErroWS=gx.fn.getControlValue("vSDTAVISOERROWS") ;
   };
   this.e171dc2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e121dc2_client=function()
   {
      this.executeServerEvent("'PRIMEIRAPAGINA'", true, null, false, false);
   };
   this.e131dc2_client=function()
   {
      this.executeServerEvent("'PAGINAANTERIOR'", true, null, false, false);
   };
   this.e141dc2_client=function()
   {
      this.executeServerEvent("'PROXIMAPAGINA'", true, null, false, false);
   };
   this.e151dc2_client=function()
   {
      this.executeServerEvent("'ULTIMAPAGINA'", true, null, false, false);
   };
   this.e111dc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e181dc2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e211dc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e221dc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,14,15,16,17,18,19,22,25,27,29,31,33,34,35,36,39,42,44,46,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",13,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"havisoerrowebservice",[],false,1,true,true,0,false,false,false,"CollSdtAvisoErroWS.SdtAvisoErroWSItem",0,"px","Novo registro",true,false,false,null,null,false,"AV34SdtAvisoErroWS",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV10E",14,"CTLERROWEBSERVICEPDV","","","ErroWebServicePDV","int",0,"px",10,10,"right",null,[],"GXV10E","GXV10E",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("GXV10F",15,"CTLERROWEBSERVICENOVENDAFCX","","","ErroWebServiceNoVendaFcx","int",0,"px",6,6,"right",null,[],"GXV10F","GXV10F",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("GXV10G",16,"CTLERROWEBSERVICEMENSAGEM","Mensagem de Erro","","ErroWebServiceMensagem","svchar",620,"px",200,80,"left",null,[],"GXV10G","GXV10G",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("GXV10H",17,"CTLERROWEBSERVICEDATA","","","ErroWebServiceData","date",0,"px",10,10,"right",null,[],"GXV10H","GXV10H",true,0,false,false,"",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",18,0,"px",17,"px","e171dc2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("GXV10J",19,"CTLERROWEBSERVICESEQUENCIA","Sequência","","ErroWebServiceSequencia","int",0,"px",10,10,"right",null,[],"GXV10J","GXV10J",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"IMGMODAL",grid:0};
   GXValidFnc[10]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:13,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLERROWEBSERVICEPDV",gxz:"ZV40GXV10E",gxold:"OV40GXV10E",gxvar:"GXV10E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10E=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40GXV10E=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLERROWEBSERVICEPDV",row || gx.fn.currentGridRowImpl(13),gx.O.GXV10E,0)},c2v:function(){gx.O.GXV10E=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLERROWEBSERVICEPDV",row || gx.fn.currentGridRowImpl(13),'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:13,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLERROWEBSERVICENOVENDAFCX",gxz:"ZV41GXV10F",gxold:"OV41GXV10F",gxvar:"GXV10F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10F=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41GXV10F=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLERROWEBSERVICENOVENDAFCX",row || gx.fn.currentGridRowImpl(13),gx.O.GXV10F,0)},c2v:function(){gx.O.GXV10F=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLERROWEBSERVICENOVENDAFCX",row || gx.fn.currentGridRowImpl(13),'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"svchar",len:200,dec:0,sign:false,ro:0,isacc:0,grid:13,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLERROWEBSERVICEMENSAGEM",gxz:"ZV42GXV10G",gxold:"OV42GXV10G",gxvar:"GXV10G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10G=Value},v2z:function(Value){gx.O.ZV42GXV10G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLERROWEBSERVICEMENSAGEM",row || gx.fn.currentGridRowImpl(13),gx.O.GXV10G,0)},c2v:function(){gx.O.GXV10G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLERROWEBSERVICEMENSAGEM",row || gx.fn.currentGridRowImpl(13))},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:13,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLERROWEBSERVICEDATA",gxz:"ZV43GXV10H",gxold:"OV43GXV10H",gxvar:"GXV10H",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10H=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV43GXV10H=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLERROWEBSERVICEDATA",row || gx.fn.currentGridRowImpl(13),gx.O.GXV10H,0)},c2v:function(){gx.O.GXV10H=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLERROWEBSERVICEDATA",row || gx.fn.currentGridRowImpl(13))},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:13,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(13),gx.O.AV8bmpExc,gx.O.AV46Bmpexc_GXI)},c2v:function(){gx.O.AV46Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(13))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(13))}, gxvar_GXI:'AV46Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:13,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLERROWEBSERVICESEQUENCIA",gxz:"ZV44GXV10J",gxold:"OV44GXV10J",gxvar:"GXV10J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10J=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44GXV10J=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLERROWEBSERVICESEQUENCIA",row || gx.fn.currentGridRowImpl(13),gx.O.GXV10J,0)},c2v:function(){gx.O.GXV10J=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLERROWEBSERVICESEQUENCIA",row || gx.fn.currentGridRowImpl(13),'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TABLE4",grid:0};
   GXValidFnc[25]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[27]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[29]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[31]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[33]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE11",grid:0};
   GXValidFnc[42]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vERROWEBSERVICE",gxz:"ZV33ErroWebservice",gxold:"OV33ErroWebservice",gxvar:"AV33ErroWebservice",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ErroWebservice=Value},v2z:function(Value){gx.O.ZV33ErroWebservice=Value},v2c:function(){gx.fn.setMultimediaValue("vERROWEBSERVICE",gx.O.AV33ErroWebservice,gx.O.AV47Errowebservice_GXI)},c2v:function(){gx.O.AV47Errowebservice_GXI=this.val_GXI();gx.O.AV33ErroWebservice=this.val()},val:function(){return gx.fn.getBlobValue("vERROWEBSERVICE")},val_GXI:function(){return gx.fn.getControlValue("vERROWEBSERVICE_GXI")}, gxvar_GXI:'AV47Errowebservice_GXI',nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vERRONFCE",gxz:"ZV32ErroNFCe",gxold:"OV32ErroNFCe",gxvar:"AV32ErroNFCe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ErroNFCe=Value},v2z:function(Value){gx.O.ZV32ErroNFCe=Value},v2c:function(){gx.fn.setMultimediaValue("vERRONFCE",gx.O.AV32ErroNFCe,gx.O.AV48Erronfce_GXI)},c2v:function(){gx.O.AV48Erronfce_GXI=this.val_GXI();gx.O.AV32ErroNFCe=this.val()},val:function(){return gx.fn.getBlobValue("vERRONFCE")},val_GXI:function(){return gx.fn.getControlValue("vERRONFCE_GXI")}, gxvar_GXI:'AV48Erronfce_GXI',nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK3", format:0,grid:0};
   this.ZV40GXV10E = 0 ;
   this.OV40GXV10E = 0 ;
   this.ZV41GXV10F = 0 ;
   this.OV41GXV10F = 0 ;
   this.ZV42GXV10G = "" ;
   this.OV42GXV10G = "" ;
   this.ZV43GXV10H = gx.date.nullDate() ;
   this.OV43GXV10H = gx.date.nullDate() ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV44GXV10J = 0 ;
   this.OV44GXV10J = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV47Errowebservice_GXI = "" ;
   this.AV33ErroWebservice = "" ;
   this.ZV33ErroWebservice = "" ;
   this.OV33ErroWebservice = "" ;
   this.AV48Erronfce_GXI = "" ;
   this.AV32ErroNFCe = "" ;
   this.ZV32ErroNFCe = "" ;
   this.OV32ErroNFCe = "" ;
   this.AV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV33ErroWebservice = "" ;
   this.AV32ErroNFCe = "" ;
   this.GXV10E = 0 ;
   this.GXV10F = 0 ;
   this.GXV10G = "" ;
   this.GXV10H = gx.date.nullDate() ;
   this.AV8bmpExc = "" ;
   this.GXV10J = 0 ;
   this.A140SistemaId = "" ;
   this.A138EmpresaId = "" ;
   this.A11815LogNFCeEmpresaId = "" ;
   this.A11816LogNFCePDV = 0 ;
   this.A11818LogNFCeSequencia = 0 ;
   this.A11817LogNFCeSaidaId = 0 ;
   this.A11823LogNFCeMensagem = "" ;
   this.A11822LogNFCeDtHoraAutori = gx.date.nullDate() ;
   this.A9116ErroWebServiceEmpresaId = "" ;
   this.A9117ErroWebServicePDV = 0 ;
   this.A9118ErroWebServiceSequencia = 0 ;
   this.A9111ErroWebServiceNoVendaFcx = 0 ;
   this.A9112ErroWebServiceMensagem = "" ;
   this.A9114ErroWebServiceData = gx.date.nullDate() ;
   this.AV28ErroWebServiceEmpresaId = "" ;
   this.AV34SdtAvisoErroWS = [ ] ;
   this.Events = {"e171dc2_client": ["'EXCLUIR'", true] ,"e121dc2_client": ["'PRIMEIRAPAGINA'", true] ,"e131dc2_client": ["'PAGINAANTERIOR'", true] ,"e141dc2_client": ["'PROXIMAPAGINA'", true] ,"e151dc2_client": ["'ULTIMAPAGINA'", true] ,"e111dc2_client": ["'FECHAR'", true] ,"e181dc2_client": ["'ATUALIZAPAGINA'", true] ,"e211dc2_client": ["ENTER", true] ,"e221dc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV34SdtAvisoErroWS',fld:'vSDTAVISOERROWS',grid:13},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A9116ErroWebServiceEmpresaId',fld:'ERROWEBSERVICEEMPRESAID'},{av:'AV28ErroWebServiceEmpresaId',fld:'vERROWEBSERVICEEMPRESAID'},{av:'A9117ErroWebServicePDV',fld:'ERROWEBSERVICEPDV'},{av:'A9118ErroWebServiceSequencia',fld:'ERROWEBSERVICESEQUENCIA'},{av:'A9111ErroWebServiceNoVendaFcx',fld:'ERROWEBSERVICENOVENDAFCX'},{av:'A9112ErroWebServiceMensagem',fld:'ERROWEBSERVICEMENSAGEM'},{av:'A9114ErroWebServiceData',fld:'ERROWEBSERVICEDATA'},{av:'A11815LogNFCeEmpresaId',fld:'LOGNFCEEMPRESAID'},{av:'A11816LogNFCePDV',fld:'LOGNFCEPDV'},{av:'A11818LogNFCeSequencia',fld:'LOGNFCESEQUENCIA'},{av:'A11817LogNFCeSaidaId',fld:'LOGNFCESAIDAID'},{av:'A11823LogNFCeMensagem',fld:'LOGNFCEMENSAGEM'},{av:'A11822LogNFCeDtHoraAutori',fld:'LOGNFCEDTHORAAUTORI'}],[{ctrl:'CTLERROWEBSERVICEPDV',prop:'Titleformat'},{ctrl:'CTLERROWEBSERVICEPDV',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CTLERROWEBSERVICENOVENDAFCX',prop:'Titleformat'},{ctrl:'CTLERROWEBSERVICENOVENDAFCX',prop:'Title'},{ctrl:'CTLERROWEBSERVICEDATA',prop:'Titleformat'},{ctrl:'CTLERROWEBSERVICEDATA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV34SdtAvisoErroWS',fld:'vSDTAVISOERROWS',grid:13},{av:'AV35SdtAvisoErroWSItem',fld:'vSDTAVISOERROWSITEM'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV34SdtAvisoErroWS',fld:'vSDTAVISOERROWS',grid:13},{av:'AV28ErroWebServiceEmpresaId',fld:'vERROWEBSERVICEEMPRESAID'},{av:'AV27Data',fld:'vDATA'}],[]];
   this.EvtParms["'PRIMEIRAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A9116ErroWebServiceEmpresaId',fld:'ERROWEBSERVICEEMPRESAID'},{av:'AV28ErroWebServiceEmpresaId',fld:'vERROWEBSERVICEEMPRESAID'},{av:'A9117ErroWebServicePDV',fld:'ERROWEBSERVICEPDV'},{av:'A9118ErroWebServiceSequencia',fld:'ERROWEBSERVICESEQUENCIA'},{av:'A9111ErroWebServiceNoVendaFcx',fld:'ERROWEBSERVICENOVENDAFCX'},{av:'A9112ErroWebServiceMensagem',fld:'ERROWEBSERVICEMENSAGEM'},{av:'A9114ErroWebServiceData',fld:'ERROWEBSERVICEDATA'},{av:'A11815LogNFCeEmpresaId',fld:'LOGNFCEEMPRESAID'},{av:'A11816LogNFCePDV',fld:'LOGNFCEPDV'},{av:'A11818LogNFCeSequencia',fld:'LOGNFCESEQUENCIA'},{av:'A11817LogNFCeSaidaId',fld:'LOGNFCESAIDAID'},{av:'A11823LogNFCeMensagem',fld:'LOGNFCEMENSAGEM'},{av:'A11822LogNFCeDtHoraAutori',fld:'LOGNFCEDTHORAAUTORI'},{av:'AV34SdtAvisoErroWS',fld:'vSDTAVISOERROWS',grid:13}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PAGINAANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A9116ErroWebServiceEmpresaId',fld:'ERROWEBSERVICEEMPRESAID'},{av:'AV28ErroWebServiceEmpresaId',fld:'vERROWEBSERVICEEMPRESAID'},{av:'A9117ErroWebServicePDV',fld:'ERROWEBSERVICEPDV'},{av:'A9118ErroWebServiceSequencia',fld:'ERROWEBSERVICESEQUENCIA'},{av:'A9111ErroWebServiceNoVendaFcx',fld:'ERROWEBSERVICENOVENDAFCX'},{av:'A9112ErroWebServiceMensagem',fld:'ERROWEBSERVICEMENSAGEM'},{av:'A9114ErroWebServiceData',fld:'ERROWEBSERVICEDATA'},{av:'A11815LogNFCeEmpresaId',fld:'LOGNFCEEMPRESAID'},{av:'A11816LogNFCePDV',fld:'LOGNFCEPDV'},{av:'A11818LogNFCeSequencia',fld:'LOGNFCESEQUENCIA'},{av:'A11817LogNFCeSaidaId',fld:'LOGNFCESAIDAID'},{av:'A11823LogNFCeMensagem',fld:'LOGNFCEMENSAGEM'},{av:'A11822LogNFCeDtHoraAutori',fld:'LOGNFCEDTHORAAUTORI'},{av:'AV34SdtAvisoErroWS',fld:'vSDTAVISOERROWS',grid:13},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROXIMAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A9116ErroWebServiceEmpresaId',fld:'ERROWEBSERVICEEMPRESAID'},{av:'AV28ErroWebServiceEmpresaId',fld:'vERROWEBSERVICEEMPRESAID'},{av:'A9117ErroWebServicePDV',fld:'ERROWEBSERVICEPDV'},{av:'A9118ErroWebServiceSequencia',fld:'ERROWEBSERVICESEQUENCIA'},{av:'A9111ErroWebServiceNoVendaFcx',fld:'ERROWEBSERVICENOVENDAFCX'},{av:'A9112ErroWebServiceMensagem',fld:'ERROWEBSERVICEMENSAGEM'},{av:'A9114ErroWebServiceData',fld:'ERROWEBSERVICEDATA'},{av:'A11815LogNFCeEmpresaId',fld:'LOGNFCEEMPRESAID'},{av:'A11816LogNFCePDV',fld:'LOGNFCEPDV'},{av:'A11818LogNFCeSequencia',fld:'LOGNFCESEQUENCIA'},{av:'A11817LogNFCeSaidaId',fld:'LOGNFCESAIDAID'},{av:'A11823LogNFCeMensagem',fld:'LOGNFCEMENSAGEM'},{av:'A11822LogNFCeDtHoraAutori',fld:'LOGNFCEDTHORAAUTORI'},{av:'AV34SdtAvisoErroWS',fld:'vSDTAVISOERROWS',grid:13},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ULTIMAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A9116ErroWebServiceEmpresaId',fld:'ERROWEBSERVICEEMPRESAID'},{av:'AV28ErroWebServiceEmpresaId',fld:'vERROWEBSERVICEEMPRESAID'},{av:'A9117ErroWebServicePDV',fld:'ERROWEBSERVICEPDV'},{av:'A9118ErroWebServiceSequencia',fld:'ERROWEBSERVICESEQUENCIA'},{av:'A9111ErroWebServiceNoVendaFcx',fld:'ERROWEBSERVICENOVENDAFCX'},{av:'A9112ErroWebServiceMensagem',fld:'ERROWEBSERVICEMENSAGEM'},{av:'A9114ErroWebServiceData',fld:'ERROWEBSERVICEDATA'},{av:'A11815LogNFCeEmpresaId',fld:'LOGNFCEEMPRESAID'},{av:'A11816LogNFCePDV',fld:'LOGNFCEPDV'},{av:'A11818LogNFCeSequencia',fld:'LOGNFCESEQUENCIA'},{av:'A11817LogNFCeSaidaId',fld:'LOGNFCESAIDAID'},{av:'A11823LogNFCeMensagem',fld:'LOGNFCEMENSAGEM'},{av:'A11822LogNFCeDtHoraAutori',fld:'LOGNFCEDTHORAAUTORI'},{av:'AV34SdtAvisoErroWS',fld:'vSDTAVISOERROWS',grid:13},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A140SistemaId',fld:'SISTEMAID'}],[{av:'AV51Snaniversariante',fld:'vSNANIVERSARIANTE'},{av:'AV31SnExecOut',fld:'vSNEXECOUT'},{av:'AV29SNExisteVisita',fld:'vSNEXISTEVISITA'},{av:'AV30SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A9116ErroWebServiceEmpresaId',fld:'ERROWEBSERVICEEMPRESAID'},{av:'AV28ErroWebServiceEmpresaId',fld:'vERROWEBSERVICEEMPRESAID'},{av:'A9117ErroWebServicePDV',fld:'ERROWEBSERVICEPDV'},{av:'A9118ErroWebServiceSequencia',fld:'ERROWEBSERVICESEQUENCIA'},{av:'A9111ErroWebServiceNoVendaFcx',fld:'ERROWEBSERVICENOVENDAFCX'},{av:'A9112ErroWebServiceMensagem',fld:'ERROWEBSERVICEMENSAGEM'},{av:'A9114ErroWebServiceData',fld:'ERROWEBSERVICEDATA'},{av:'A11815LogNFCeEmpresaId',fld:'LOGNFCEEMPRESAID'},{av:'A11816LogNFCePDV',fld:'LOGNFCEPDV'},{av:'A11818LogNFCeSequencia',fld:'LOGNFCESEQUENCIA'},{av:'A11817LogNFCeSaidaId',fld:'LOGNFCESAIDAID'},{av:'A11823LogNFCeMensagem',fld:'LOGNFCEMENSAGEM'},{av:'A11822LogNFCeDtHoraAutori',fld:'LOGNFCEDTHORAAUTORI'},{av:'AV34SdtAvisoErroWS',fld:'vSDTAVISOERROWS',grid:13}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV34SdtAvisoErroWS',fld:'vSDTAVISOERROWS',grid:13}],[{av:'AV36NomeClasse',fld:'vNOMECLASSE'},{ctrl:'CTLERROWEBSERVICEPDV',prop:'Class'},{ctrl:'CTLERROWEBSERVICENOVENDAFCX',prop:'Class'},{ctrl:'CTLERROWEBSERVICEMENSAGEM',prop:'Class'},{ctrl:'CTLERROWEBSERVICEDATA',prop:'Class'}]];
   this.setVCMap("A9116ErroWebServiceEmpresaId", "ERROWEBSERVICEEMPRESAID", 0, "char");
   this.setVCMap("AV28ErroWebServiceEmpresaId", "vERROWEBSERVICEEMPRESAID", 0, "char");
   this.setVCMap("A9117ErroWebServicePDV", "ERROWEBSERVICEPDV", 0, "int");
   this.setVCMap("A9118ErroWebServiceSequencia", "ERROWEBSERVICESEQUENCIA", 0, "int");
   this.setVCMap("A9111ErroWebServiceNoVendaFcx", "ERROWEBSERVICENOVENDAFCX", 0, "int");
   this.setVCMap("A9112ErroWebServiceMensagem", "ERROWEBSERVICEMENSAGEM", 0, "svchar");
   this.setVCMap("A9114ErroWebServiceData", "ERROWEBSERVICEDATA", 0, "date");
   this.setVCMap("A11815LogNFCeEmpresaId", "LOGNFCEEMPRESAID", 0, "char");
   this.setVCMap("A11816LogNFCePDV", "LOGNFCEPDV", 0, "int");
   this.setVCMap("A11818LogNFCeSequencia", "LOGNFCESEQUENCIA", 0, "int");
   this.setVCMap("A11817LogNFCeSaidaId", "LOGNFCESAIDAID", 0, "int");
   this.setVCMap("A11823LogNFCeMensagem", "LOGNFCEMENSAGEM", 0, "svchar");
   this.setVCMap("A11822LogNFCeDtHoraAutori", "LOGNFCEDTHORAAUTORI", 0, "dtime");
   this.setVCMap("AV34SdtAvisoErroWS", "vSDTAVISOERROWS", 0, "CollSdtAvisoErroWS.SdtAvisoErroWSItem");
   this.setVCMap("A9116ErroWebServiceEmpresaId", "ERROWEBSERVICEEMPRESAID", 0, "char");
   this.setVCMap("AV28ErroWebServiceEmpresaId", "vERROWEBSERVICEEMPRESAID", 0, "char");
   this.setVCMap("A9117ErroWebServicePDV", "ERROWEBSERVICEPDV", 0, "int");
   this.setVCMap("A9118ErroWebServiceSequencia", "ERROWEBSERVICESEQUENCIA", 0, "int");
   this.setVCMap("A9111ErroWebServiceNoVendaFcx", "ERROWEBSERVICENOVENDAFCX", 0, "int");
   this.setVCMap("A9112ErroWebServiceMensagem", "ERROWEBSERVICEMENSAGEM", 0, "svchar");
   this.setVCMap("A9114ErroWebServiceData", "ERROWEBSERVICEDATA", 0, "date");
   this.setVCMap("A11815LogNFCeEmpresaId", "LOGNFCEEMPRESAID", 0, "char");
   this.setVCMap("A11816LogNFCePDV", "LOGNFCEPDV", 0, "int");
   this.setVCMap("A11818LogNFCeSequencia", "LOGNFCESEQUENCIA", 0, "int");
   this.setVCMap("A11817LogNFCeSaidaId", "LOGNFCESAIDAID", 0, "int");
   this.setVCMap("A11823LogNFCeMensagem", "LOGNFCEMENSAGEM", 0, "svchar");
   this.setVCMap("A11822LogNFCeDtHoraAutori", "LOGNFCEDTHORAAUTORI", 0, "dtime");
   this.setVCMap("AV34SdtAvisoErroWS", "vSDTAVISOERROWS", 0, "CollSdtAvisoErroWS.SdtAvisoErroWSItem");
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar({rfrVar:"A9116ErroWebServiceEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV28ErroWebServiceEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A9117ErroWebServicePDV"});
   GridContainer.addRefreshingVar({rfrVar:"A9118ErroWebServiceSequencia"});
   GridContainer.addRefreshingVar({rfrVar:"A9111ErroWebServiceNoVendaFcx"});
   GridContainer.addRefreshingVar({rfrVar:"A9112ErroWebServiceMensagem"});
   GridContainer.addRefreshingVar({rfrVar:"A9114ErroWebServiceData"});
   GridContainer.addRefreshingVar({rfrVar:"A11815LogNFCeEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A11816LogNFCePDV"});
   GridContainer.addRefreshingVar({rfrVar:"A11818LogNFCeSequencia"});
   GridContainer.addRefreshingVar({rfrVar:"A11817LogNFCeSaidaId"});
   GridContainer.addRefreshingVar({rfrVar:"A11823LogNFCeMensagem"});
   GridContainer.addRefreshingVar({rfrVar:"A11822LogNFCeDtHoraAutori"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SdtAvisoErroWS"});
   this.addGridBCProperty("Sdtavisoerrows", ["ErroWebServicePDV"], this.GXValidFnc[14], "AV34SdtAvisoErroWS");
   this.addGridBCProperty("Sdtavisoerrows", ["ErroWebServiceNoVendaFcx"], this.GXValidFnc[15], "AV34SdtAvisoErroWS");
   this.addGridBCProperty("Sdtavisoerrows", ["ErroWebServiceMensagem"], this.GXValidFnc[16], "AV34SdtAvisoErroWS");
   this.addGridBCProperty("Sdtavisoerrows", ["ErroWebServiceData"], this.GXValidFnc[17], "AV34SdtAvisoErroWS");
   this.addGridBCProperty("Sdtavisoerrows", ["ErroWebServiceSequencia"], this.GXValidFnc[19], "AV34SdtAvisoErroWS");
   this.InitStandaloneVars( );
});
gx.setParentObj(new havisoerrowebservice());
