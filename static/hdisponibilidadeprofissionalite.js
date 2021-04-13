/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:14:40.20
*/
gx.evt.autoSkip = false;
gx.define('hdisponibilidadeprofissionalite', false, function () {
   this.ServerClass =  "hdisponibilidadeprofissionalite" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV39SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV52Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Profissionalid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROFISSIONALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Profissionalempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROFISSIONALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111cp2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121cp2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e161cp2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131cp2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141cp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e201cp2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e211cp2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e221cp2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e151cp2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e241cp2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e251cp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,19,22,25,27,29,31,33,36,38,39,43,44,45,46,47,48,49,50,51,52,53,54,60,61,63,64,65];
   this.GXLastCtrlId =65;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",42,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdisponibilidadeprofissionalite",[],false,1,false,true,0,false,false,false,"CollSDTDisponibilidadeProfissional.SDTDisponibilidadeProfissionalItem",0,"px","Novo registro",true,false,false,null,null,false,"AV32SdtDisponibilidadeProfissional",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV117",43,"CTLDISPONIBILIDADE","disponibilidade","","disponibilidade","int",0,"px",4,4,"right",null,[],"GXV117","GXV117",false,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addSingleLineEdit("GXV118",44,"CTLPROFISSIONALEMPRESAID","Empresa do Profissional","","profissionalEmpresaId","char",0,"px",10,10,"left",null,[],"GXV118","GXV118",false,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addSingleLineEdit("GXV119",45,"CTLPROFISSIONALID","Profissional","","profissionalID","int",0,"px",4,4,"right",null,[],"GXV119","GXV119",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11A",46,"CTLPROFISSIONALNOME","Nome","","profissionalNome","svchar",190,"px",20,20,"left",null,[],"GXV11A","GXV11A",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11B",47,"CTLDISPONIBILIDADEDIASEMANA","Dia Semana","","disponibilidadeProfissionalDia","char",0,"px",7,7,"left",null,[],"GXV11B","GXV11B",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11C",48,"CTLDISPONIBILIDADEHORAINICIAL","Hora incial","","disponibilidadeProfissionalhri","char",0,"px",5,5,"left",null,[],"GXV11C","GXV11C",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11D",49,"CTLDISPONIBILIDADEHORAFINAL","Hora Final","","disponibilidadeProfissionalhrf","char",0,"px",5,5,"left",null,[],"GXV11D","GXV11D",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11E",50,"CTLDISPONIBILIDADEUSUARIO","disponibilidade Profissional Usu Alt","","disponibilidadeProfissionalUsuAlt","char",0,"px",12,12,"left",null,[],"GXV11E","GXV11E",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11F",51,"CTLDISPONIBILIDADEDATAHORA","Data Hora","","disponibilidadeProfissionaldha","dtime",0,"px",16,16,"right",null,[],"GXV11F","GXV11F",false,5,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",52,0,"px",17,"px","e201cp2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",53,0,"px",17,"px","e221cp2_client","","Cons","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",54,0,"px",17,"px","e211cp2_client","","Exc","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalid,isvalid:null,rgrid:[],fld:"vPROFISSIONALID",gxz:"ZV27ProfissionalId",gxold:"OV27ProfissionalId",gxvar:"AV27ProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROFISSIONALID",gx.O.AV27ProfissionalId,0)},c2v:function(){gx.O.AV27ProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSIONALDESC",gxz:"ZV28Profissionaldesc",gxold:"OV28Profissionaldesc",gxvar:"AV28Profissionaldesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Profissionaldesc=Value},v2z:function(Value){gx.O.ZV28Profissionaldesc=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALDESC",gx.O.AV28Profissionaldesc,0)},c2v:function(){gx.O.AV28Profissionaldesc=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALDESC")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TABLE4",grid:0};
   GXValidFnc[22]={fld:"TABLE1",grid:0};
   GXValidFnc[25]={fld:"IMAGE2",grid:0};
   GXValidFnc[27]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[29]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[31]={fld:"BTNHELP",grid:0};
   GXValidFnc[33]={fld:"TABLE5",grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDISPONIBILIDADE",gxz:"ZV43GXV117",gxold:"OV43GXV117",gxvar:"GXV117",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV117=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43GXV117=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDISPONIBILIDADE",row || gx.fn.currentGridRowImpl(42),gx.O.GXV117,0)},c2v:function(){gx.O.GXV117=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLDISPONIBILIDADE",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROFISSIONALEMPRESAID",gxz:"ZV44GXV118",gxold:"OV44GXV118",gxvar:"GXV118",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV118=Value},v2z:function(Value){gx.O.ZV44GXV118=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPROFISSIONALEMPRESAID",row || gx.fn.currentGridRowImpl(42),gx.O.GXV118,0)},c2v:function(){gx.O.GXV118=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPROFISSIONALEMPRESAID",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROFISSIONALID",gxz:"ZV45GXV119",gxold:"OV45GXV119",gxvar:"GXV119",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV119=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45GXV119=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPROFISSIONALID",row || gx.fn.currentGridRowImpl(42),gx.O.GXV119,0)},c2v:function(){gx.O.GXV119=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPROFISSIONALID",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROFISSIONALNOME",gxz:"ZV46GXV11A",gxold:"OV46GXV11A",gxvar:"GXV11A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11A=Value},v2z:function(Value){gx.O.ZV46GXV11A=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPROFISSIONALNOME",row || gx.fn.currentGridRowImpl(42),gx.O.GXV11A,0)},c2v:function(){gx.O.GXV11A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPROFISSIONALNOME",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDISPONIBILIDADEDIASEMANA",gxz:"ZV47GXV11B",gxold:"OV47GXV11B",gxvar:"GXV11B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11B=Value},v2z:function(Value){gx.O.ZV47GXV11B=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDISPONIBILIDADEDIASEMANA",row || gx.fn.currentGridRowImpl(42),gx.O.GXV11B,0)},c2v:function(){gx.O.GXV11B=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDISPONIBILIDADEDIASEMANA",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDISPONIBILIDADEHORAINICIAL",gxz:"ZV48GXV11C",gxold:"OV48GXV11C",gxvar:"GXV11C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11C=Value},v2z:function(Value){gx.O.ZV48GXV11C=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDISPONIBILIDADEHORAINICIAL",row || gx.fn.currentGridRowImpl(42),gx.O.GXV11C,0)},c2v:function(){gx.O.GXV11C=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDISPONIBILIDADEHORAINICIAL",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDISPONIBILIDADEHORAFINAL",gxz:"ZV49GXV11D",gxold:"OV49GXV11D",gxvar:"GXV11D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11D=Value},v2z:function(Value){gx.O.ZV49GXV11D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDISPONIBILIDADEHORAFINAL",row || gx.fn.currentGridRowImpl(42),gx.O.GXV11D,0)},c2v:function(){gx.O.GXV11D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDISPONIBILIDADEHORAFINAL",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDISPONIBILIDADEUSUARIO",gxz:"ZV50GXV11E",gxold:"OV50GXV11E",gxvar:"GXV11E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11E=Value},v2z:function(Value){gx.O.ZV50GXV11E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDISPONIBILIDADEUSUARIO",row || gx.fn.currentGridRowImpl(42),gx.O.GXV11E,0)},c2v:function(){gx.O.GXV11E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDISPONIBILIDADEUSUARIO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDISPONIBILIDADEDATAHORA",gxz:"ZV51GXV11F",gxold:"OV51GXV11F",gxvar:"GXV11F",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11F=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV51GXV11F=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDISPONIBILIDADEDATAHORA",row || gx.fn.currentGridRowImpl(42),gx.O.GXV11F,0)},c2v:function(){gx.O.GXV11F=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDISPONIBILIDADEDATAHORA",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(42),gx.O.AV7bmpAlt,gx.O.AV55Bmpalt_GXI)},c2v:function(){gx.O.AV55Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(42))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(42))}, gxvar_GXI:'AV55Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(42),gx.O.AV16bmpCon,gx.O.AV57Bmpcon_GXI)},c2v:function(){gx.O.AV57Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(42))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(42))}, gxvar_GXI:'AV57Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(42),gx.O.AV8bmpExc,gx.O.AV56Bmpexc_GXI)},c2v:function(){gx.O.AV56Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(42))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(42))}, gxvar_GXI:'AV56Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalempresaid,isvalid:null,rgrid:[],fld:"vPROFISSIONALEMPRESAID",gxz:"ZV29ProfissionalEmpresaId",gxold:"OV29ProfissionalEmpresaId",gxvar:"AV29ProfissionalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ProfissionalEmpresaId=Value},v2z:function(Value){gx.O.ZV29ProfissionalEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALEMPRESAID",gx.O.AV29ProfissionalEmpresaId,0)},c2v:function(){gx.O.AV29ProfissionalEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDREGISTROS",gxz:"ZV37QtdRegistros",gxold:"OV37QtdRegistros",gxvar:"AV37QtdRegistros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37QtdRegistros=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37QtdRegistros=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDREGISTROS",gx.O.AV37QtdRegistros,0)},c2v:function(){gx.O.AV37QtdRegistros=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDREGISTROS",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDPAGINAS",gxz:"ZV38QtdPaginas",gxold:"OV38QtdPaginas",gxvar:"AV38QtdPaginas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38QtdPaginas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV38QtdPaginas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vQTDPAGINAS",gx.O.AV38QtdPaginas,2,',')},c2v:function(){gx.O.AV38QtdPaginas=this.val()},val:function(){return gx.fn.getDecimalValue("vQTDPAGINAS",'.',',')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"JS", format:2,grid:0};
   GXValidFnc[65]={fld:"PROMPT_PROFISSIONALID",grid:0};
   this.AV27ProfissionalId = 0 ;
   this.ZV27ProfissionalId = 0 ;
   this.OV27ProfissionalId = 0 ;
   this.AV28Profissionaldesc = "" ;
   this.ZV28Profissionaldesc = "" ;
   this.OV28Profissionaldesc = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.ZV43GXV117 = 0 ;
   this.OV43GXV117 = 0 ;
   this.ZV44GXV118 = "" ;
   this.OV44GXV118 = "" ;
   this.ZV45GXV119 = 0 ;
   this.OV45GXV119 = 0 ;
   this.ZV46GXV11A = "" ;
   this.OV46GXV11A = "" ;
   this.ZV47GXV11B = "" ;
   this.OV47GXV11B = "" ;
   this.ZV48GXV11C = "" ;
   this.OV48GXV11C = "" ;
   this.ZV49GXV11D = "" ;
   this.OV49GXV11D = "" ;
   this.ZV50GXV11E = "" ;
   this.OV50GXV11E = "" ;
   this.ZV51GXV11F = gx.date.nullDate() ;
   this.OV51GXV11F = gx.date.nullDate() ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.AV29ProfissionalEmpresaId = "" ;
   this.ZV29ProfissionalEmpresaId = "" ;
   this.OV29ProfissionalEmpresaId = "" ;
   this.AV37QtdRegistros = 0 ;
   this.ZV37QtdRegistros = 0 ;
   this.OV37QtdRegistros = 0 ;
   this.AV38QtdPaginas = 0 ;
   this.ZV38QtdPaginas = 0 ;
   this.OV38QtdPaginas = 0 ;
   this.AV27ProfissionalId = 0 ;
   this.AV28Profissionaldesc = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV29ProfissionalEmpresaId = "" ;
   this.AV37QtdRegistros = 0 ;
   this.AV38QtdPaginas = 0 ;
   this.GXV117 = 0 ;
   this.GXV118 = "" ;
   this.GXV119 = 0 ;
   this.GXV11A = "" ;
   this.GXV11B = "" ;
   this.GXV11C = "" ;
   this.GXV11D = "" ;
   this.GXV11E = "" ;
   this.GXV11F = gx.date.nullDate() ;
   this.AV7bmpAlt = "" ;
   this.AV16bmpCon = "" ;
   this.AV8bmpExc = "" ;
   this.A8566ProfissionalId = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8608ProfissionalNome = "" ;
   this.A8579DisponibilidadeProfissionalId = 0 ;
   this.A8941DisponibilidadeProfissionalDia = "" ;
   this.A8944disponibilidadeprofissionaldha = gx.date.nullDate() ;
   this.A8942disponibilidadeprofissionalhri = "" ;
   this.A8943disponibilidadeprofissionalhrf = "" ;
   this.A8577DisponibilidadeProfissionalUsu = "" ;
   this.AV39SnRecuperaFiltro = "" ;
   this.AV52Pgmname = "" ;
   this.Events = {"e111cp2_client": ["'ANTERIOR'", true] ,"e121cp2_client": ["'PROXIMO'", true] ,"e161cp2_client": ["VPAGINA.CLICK", true] ,"e131cp2_client": ["'NOVO'", true] ,"e141cp2_client": ["'FECHAR'", true] ,"e201cp2_client": ["'ALTERAR'", true] ,"e211cp2_client": ["'EXCLUIR'", true] ,"e221cp2_client": ["'CONSULTAR'", true] ,"e151cp2_client": ["'PROCURAR'", true] ,"e241cp2_client": ["ENTER", true] ,"e251cp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME',hsh:true}],[{av:'AV23filtros',fld:'vFILTROS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME',hsh:true}],[{av:'AV36QtdRegistrosGrid',fld:'vQTDREGISTROSGRID'},{av:'AV38QtdPaginas',fld:'vQTDPAGINAS'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV52Pgmname',fld:'vPGMNAME',hsh:true}],[{av:'AV35ProfissionalIdTexto',fld:'vPROFISSIONALIDTEXTO'},{av:'AV27ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV52Pgmname',fld:'vPGMNAME',hsh:true},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{av:'AV35ProfissionalIdTexto',fld:'vPROFISSIONALIDTEXTO'},{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV52Pgmname',fld:'vPGMNAME',hsh:true},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{av:'AV35ProfissionalIdTexto',fld:'vPROFISSIONALIDTEXTO'},{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV52Pgmname',fld:'vPGMNAME',hsh:true},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{av:'AV35ProfissionalIdTexto',fld:'vPROFISSIONALIDTEXTO'},{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'AV33SNConsiste',fld:'vSNCONSISTE'},{av:'AV27ProfissionalId',fld:'vPROFISSIONALID'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'AV29ProfissionalEmpresaId',fld:'vPROFISSIONALEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8579DisponibilidadeProfissionalId',fld:'DISPONIBILIDADEPROFISSIONALID'},{av:'A8941DisponibilidadeProfissionalDia',fld:'DISPONIBILIDADEPROFISSIONALDIA'},{av:'A8944disponibilidadeprofissionaldha',fld:'DISPONIBILIDADEPROFISSIONALDHA'},{av:'A8942disponibilidadeprofissionalhri',fld:'DISPONIBILIDADEPROFISSIONALHRI'},{av:'A8943disponibilidadeprofissionalhrf',fld:'DISPONIBILIDADEPROFISSIONALHRF'},{av:'A8577DisponibilidadeProfissionalUsu',fld:'DISPONIBILIDADEPROFISSIONALUSU'},{av:'AV37QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'AV34SdtDisponibilidadeProfissionalItens',fld:'vSDTDISPONIBILIDADEPROFISSIONALITENS'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME',hsh:true}],[{av:'AV32SdtDisponibilidadeProfissional',fld:'vSDTDISPONIBILIDADEPROFISSIONAL',grid:42},{av:'AV37QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV33SNConsiste',fld:'vSNCONSISTE'},{av:'AV34SdtDisponibilidadeProfissionalItens',fld:'vSDTDISPONIBILIDADEPROFISSIONALITENS'}]];
   this.setPrompt("PROMPT_PROFISSIONALID", [13]);
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV52Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV52Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"AV39SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV52Pgmname"});
   this.addGridBCProperty("Sdtdisponibilidadeprofissional", ["disponibilidade"], this.GXValidFnc[43], "AV32SdtDisponibilidadeProfissional");
   this.addGridBCProperty("Sdtdisponibilidadeprofissional", ["profissionalEmpresaId"], this.GXValidFnc[44], "AV32SdtDisponibilidadeProfissional");
   this.addGridBCProperty("Sdtdisponibilidadeprofissional", ["profissionalID"], this.GXValidFnc[45], "AV32SdtDisponibilidadeProfissional");
   this.addGridBCProperty("Sdtdisponibilidadeprofissional", ["profissionalNome"], this.GXValidFnc[46], "AV32SdtDisponibilidadeProfissional");
   this.addGridBCProperty("Sdtdisponibilidadeprofissional", ["disponibilidadeProfissionalDia"], this.GXValidFnc[47], "AV32SdtDisponibilidadeProfissional");
   this.addGridBCProperty("Sdtdisponibilidadeprofissional", ["disponibilidadeProfissionalhri"], this.GXValidFnc[48], "AV32SdtDisponibilidadeProfissional");
   this.addGridBCProperty("Sdtdisponibilidadeprofissional", ["disponibilidadeProfissionalhrf"], this.GXValidFnc[49], "AV32SdtDisponibilidadeProfissional");
   this.addGridBCProperty("Sdtdisponibilidadeprofissional", ["disponibilidadeProfissionalUsuAlt"], this.GXValidFnc[50], "AV32SdtDisponibilidadeProfissional");
   this.addGridBCProperty("Sdtdisponibilidadeprofissional", ["disponibilidadeProfissionaldha"], this.GXValidFnc[51], "AV32SdtDisponibilidadeProfissional");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdisponibilidadeprofissionalite());
