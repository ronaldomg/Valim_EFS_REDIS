/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:2:42.2
*/
gx.evt.autoSkip = false;
gx.define('horgaoregistro', false, function () {
   this.ServerClass =  "horgaoregistro" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV25SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV30Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Empresaorgaoregistroempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(28) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("EMPRESAORGAOREGISTROEMPRESAID", gx.fn.currentGridRowImpl(28));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11322_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12322_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e19322_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20322_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21322_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e15322_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13322_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14322_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e22322_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e23322_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24322_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25322_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,34,35,36,37,44];
   this.GXLastCtrlId =44;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"horgaoregistro",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(409,29,"EMPRESAORGAOREGISTROEMPRESAID","","","EmpresaOrgaoRegistroEmpresaId","char",0,"px",10,10,"left",null,[],409,"EmpresaOrgaoRegistroEmpresaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(398,30,"EMPRESAORGAOREGISTRONOME","","","EmpresaOrgaoRegistroNome","svchar",0,"px",40,40,"left",null,[],398,"EmpresaOrgaoRegistroNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(400,31,"ORGAOREGISTROCADASTROJUNTA","","","OrgaoRegistroCadastroJunta","svchar",0,"px",20,20,"left",null,[],400,"OrgaoRegistroCadastroJunta",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(401,32,"ORGAOREGISTRODATACADASTROJUNTA","","","OrgaoRegistroDataCadastroJunta","date",0,"px",10,10,"right",null,[],401,"OrgaoRegistroDataCadastroJunta",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(399,33,"ORGAOREGISTROINSCESTADUAL","","","OrgaoRegistroInscEstadual","svchar",0,"px",18,18,"left",null,[],399,"OrgaoRegistroInscEstadual",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(403,34,"ORGAOREGISTRONIRE","","","OrgaoRegistroNIRE","svchar",0,"px",20,20,"left",null,[],403,"OrgaoRegistroNIRE",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",35,0,"px",17,"px","e19322_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",36,0,"px",17,"px","e20322_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",37,0,"px",17,"px","e21322_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"TABLE5",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:this.Valid_Empresaorgaoregistroempresaid,isvalid:null,rgrid:[],fld:"EMPRESAORGAOREGISTROEMPRESAID",gxz:"Z409EmpresaOrgaoRegistroEmpresaId",gxold:"O409EmpresaOrgaoRegistroEmpresaId",gxvar:"A409EmpresaOrgaoRegistroEmpresaId",ucs:[],op:[30],ip:[30,29],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A409EmpresaOrgaoRegistroEmpresaId=Value},v2z:function(Value){gx.O.Z409EmpresaOrgaoRegistroEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAORGAOREGISTROEMPRESAID",row || gx.fn.currentGridRowImpl(28),gx.O.A409EmpresaOrgaoRegistroEmpresaId,0)},c2v:function(){gx.O.A409EmpresaOrgaoRegistroEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAORGAOREGISTROEMPRESAID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAORGAOREGISTRONOME",gxz:"Z398EmpresaOrgaoRegistroNome",gxold:"O398EmpresaOrgaoRegistroNome",gxvar:"A398EmpresaOrgaoRegistroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A398EmpresaOrgaoRegistroNome=Value},v2z:function(Value){gx.O.Z398EmpresaOrgaoRegistroNome=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAORGAOREGISTRONOME",row || gx.fn.currentGridRowImpl(28),gx.O.A398EmpresaOrgaoRegistroNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A398EmpresaOrgaoRegistroNome=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAORGAOREGISTRONOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORGAOREGISTROCADASTROJUNTA",gxz:"Z400OrgaoRegistroCadastroJunta",gxold:"O400OrgaoRegistroCadastroJunta",gxvar:"A400OrgaoRegistroCadastroJunta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A400OrgaoRegistroCadastroJunta=Value},v2z:function(Value){gx.O.Z400OrgaoRegistroCadastroJunta=Value},v2c:function(row){gx.fn.setGridControlValue("ORGAOREGISTROCADASTROJUNTA",row || gx.fn.currentGridRowImpl(28),gx.O.A400OrgaoRegistroCadastroJunta,0)},c2v:function(){gx.O.A400OrgaoRegistroCadastroJunta=this.val()},val:function(row){return gx.fn.getGridControlValue("ORGAOREGISTROCADASTROJUNTA",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORGAOREGISTRODATACADASTROJUNTA",gxz:"Z401OrgaoRegistroDataCadastroJunta",gxold:"O401OrgaoRegistroDataCadastroJunta",gxvar:"A401OrgaoRegistroDataCadastroJunta",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A401OrgaoRegistroDataCadastroJunta=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z401OrgaoRegistroDataCadastroJunta=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ORGAOREGISTRODATACADASTROJUNTA",row || gx.fn.currentGridRowImpl(28),gx.O.A401OrgaoRegistroDataCadastroJunta,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A401OrgaoRegistroDataCadastroJunta=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ORGAOREGISTRODATACADASTROJUNTA",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:18,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORGAOREGISTROINSCESTADUAL",gxz:"Z399OrgaoRegistroInscEstadual",gxold:"O399OrgaoRegistroInscEstadual",gxvar:"A399OrgaoRegistroInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A399OrgaoRegistroInscEstadual=Value},v2z:function(Value){gx.O.Z399OrgaoRegistroInscEstadual=Value},v2c:function(row){gx.fn.setGridControlValue("ORGAOREGISTROINSCESTADUAL",row || gx.fn.currentGridRowImpl(28),gx.O.A399OrgaoRegistroInscEstadual,0)},c2v:function(){gx.O.A399OrgaoRegistroInscEstadual=this.val()},val:function(row){return gx.fn.getGridControlValue("ORGAOREGISTROINSCESTADUAL",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORGAOREGISTRONIRE",gxz:"Z403OrgaoRegistroNIRE",gxold:"O403OrgaoRegistroNIRE",gxvar:"A403OrgaoRegistroNIRE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A403OrgaoRegistroNIRE=Value},v2z:function(Value){gx.O.Z403OrgaoRegistroNIRE=Value},v2c:function(row){gx.fn.setGridControlValue("ORGAOREGISTRONIRE",row || gx.fn.currentGridRowImpl(28),gx.O.A403OrgaoRegistroNIRE,0)},c2v:function(){gx.O.A403OrgaoRegistroNIRE=this.val()},val:function(row){return gx.fn.getGridControlValue("ORGAOREGISTRONIRE",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV7bmpAlt,gx.O.AV32Bmpalt_GXI)},c2v:function(){gx.O.AV32Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV32Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV8bmpExc,gx.O.AV33Bmpexc_GXI)},c2v:function(){gx.O.AV33Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV33Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV16bmpCon,gx.O.AV34Bmpcon_GXI)},c2v:function(){gx.O.AV34Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV34Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z409EmpresaOrgaoRegistroEmpresaId = "" ;
   this.O409EmpresaOrgaoRegistroEmpresaId = "" ;
   this.Z398EmpresaOrgaoRegistroNome = "" ;
   this.O398EmpresaOrgaoRegistroNome = "" ;
   this.Z400OrgaoRegistroCadastroJunta = "" ;
   this.O400OrgaoRegistroCadastroJunta = "" ;
   this.Z401OrgaoRegistroDataCadastroJunta = gx.date.nullDate() ;
   this.O401OrgaoRegistroDataCadastroJunta = gx.date.nullDate() ;
   this.Z399OrgaoRegistroInscEstadual = "" ;
   this.O399OrgaoRegistroInscEstadual = "" ;
   this.Z403OrgaoRegistroNIRE = "" ;
   this.O403OrgaoRegistroNIRE = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A409EmpresaOrgaoRegistroEmpresaId = "" ;
   this.A398EmpresaOrgaoRegistroNome = "" ;
   this.A400OrgaoRegistroCadastroJunta = "" ;
   this.A401OrgaoRegistroDataCadastroJunta = gx.date.nullDate() ;
   this.A399OrgaoRegistroInscEstadual = "" ;
   this.A403OrgaoRegistroNIRE = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV25SnRecuperaFiltro = "" ;
   this.AV30Pgmname = "" ;
   this.Events = {"e11322_client": ["'ANTERIOR'", true] ,"e12322_client": ["'PROXIMO'", true] ,"e19322_client": ["'ALTERAR'", true] ,"e20322_client": ["'EXCLUIR'", true] ,"e21322_client": ["'CONSULTAR'", true] ,"e15322_client": ["VPAGINA.CLICK", true] ,"e13322_client": ["'NOVO'", true] ,"e14322_client": ["'FECHAR'", true] ,"e22322_client": ["'ATUALIZAR'", true] ,"e23322_client": ["'ATUALIZAPAGINA'", true] ,"e24322_client": ["ENTER", true] ,"e25322_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30Pgmname',fld:'vPGMNAME'}],[{ctrl:'EMPRESAORGAOREGISTROEMPRESAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESAORGAOREGISTROEMPRESAID","Title")',ctrl:'EMPRESAORGAOREGISTROEMPRESAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'EMPRESAORGAOREGISTRONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESAORGAOREGISTRONOME","Title")',ctrl:'EMPRESAORGAOREGISTRONOME',prop:'Title'},{ctrl:'ORGAOREGISTROCADASTROJUNTA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORGAOREGISTROCADASTROJUNTA","Title")',ctrl:'ORGAOREGISTROCADASTROJUNTA',prop:'Title'},{ctrl:'ORGAOREGISTRODATACADASTROJUNTA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORGAOREGISTRODATACADASTROJUNTA","Title")',ctrl:'ORGAOREGISTRODATACADASTROJUNTA',prop:'Title'},{ctrl:'ORGAOREGISTROINSCESTADUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORGAOREGISTROINSCESTADUAL","Title")',ctrl:'ORGAOREGISTROINSCESTADUAL',prop:'Title'},{ctrl:'ORGAOREGISTRONIRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORGAOREGISTRONIRE","Title")',ctrl:'ORGAOREGISTRONIRE',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV26filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A409EmpresaOrgaoRegistroEmpresaId',fld:'EMPRESAORGAOREGISTROEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30Pgmname',fld:'vPGMNAME'}],[{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A409EmpresaOrgaoRegistroEmpresaId',fld:'EMPRESAORGAOREGISTROEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30Pgmname',fld:'vPGMNAME'}],[{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A409EmpresaOrgaoRegistroEmpresaId',fld:'EMPRESAORGAOREGISTROEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30Pgmname',fld:'vPGMNAME'}],[{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30Pgmname',fld:'vPGMNAME'}],[{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV25SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV30Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV25SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV30Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV25SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV30Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new horgaoregistro());
