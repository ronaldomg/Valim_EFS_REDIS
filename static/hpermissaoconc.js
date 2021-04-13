/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:42:23.98
*/
gx.evt.autoSkip = false;
gx.define('hpermissaoconc', false, function () {
   this.ServerClass =  "hpermissaoconc" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV43SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV47Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Tipopermissaoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(73) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TIPOPERMISSAOID", gx.fn.currentGridRowImpl(73));
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
   this.Valid_Permissaoconcprogramasistema=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(73) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PERMISSAOCONCPROGRAMASISTEMA", gx.fn.currentGridRowImpl(73));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e23kz2_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e11kz2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12kz2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e15kz2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13kz2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14kz2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16kz2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e21kz2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e17kz2_client=function()
   {
      this.executeServerEvent("VTIPOPERMISSAOFILTRO.ISVALID", true, null, false, true);
   };
   this.e22kz2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24kz2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,25,27,29,31,34,36,38,41,43,50,53,56,58,60,62,64,67,69,70,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,95,96,98,99,100,101];
   this.GXLastCtrlId =101;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",73,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hpermissaoconc",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3143,74,"PERMISSAOCONCSEQ","","","PermissaoConcSeq","int",0,"px",8,8,"right",null,[],3143,"PermissaoConcSeq",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(568,75,"TIPOPERMISSAOID","Código Tipo Termissão","","TipoPermissaoId","int",0,"px",4,4,"right",null,[],568,"TipoPermissaoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tipopermissaodescricao",76,"vTIPOPERMISSAODESCRICAO","","","TipoPermissaoDescricao","svchar",0,"px",25,25,"left",null,[],"Tipopermissaodescricao","TipoPermissaoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(557,77,"TIPOPERMISSAODESCRICAO","Tipo de Permissão","","TipoPermissaoDescricao","svchar",0,"px",80,80,"left",null,[],557,"TipoPermissaoDescricao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3140,78,"PERMISSAOUSUARIOSOLNOME","","","PermissaoUsuarioSolNome","svchar",0,"px",35,35,"left",null,[],3140,"PermissaoUsuarioSolNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3142,79,"PERMISSAOUSUARIOLIBNOME","","","PermissaoUsuarioLibNome","svchar",0,"px",35,35,"left",null,[],3142,"PermissaoUsuarioLibNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3149,80,"PERMISSAOCONCEMPRESAID","","","PermissaoConcEmpresaId","char",0,"px",10,10,"left",null,[],3149,"PermissaoConcEmpresaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3150,81,"PERMISSAOCONCPROGRAMASISTEMA","","","PermissaoConcProgramaSistema","char",0,"px",8,8,"left",null,[],3150,"PermissaoConcProgramaSistema",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Permissaoconcprogramanomegrid",82,"vPERMISSAOCONCPROGRAMANOMEGRID","","","PermissaoConcProgramaNomeGrid","svchar",0,"px",25,25,"left",null,[],"Permissaoconcprogramanomegrid","PermissaoConcProgramaNomeGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3152,83,"PERMISSAOCONCPROGRAMANOME","Programa","","PermissaoConcProgramaNome","svchar",0,"px",40,40,"left",null,[],3152,"PermissaoConcProgramaNome",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3144,84,"PERMISSAOCONCDATAHORASOL","","","PermissaoConcDataHoraSol","dtime",0,"px",16,16,"right",null,[],3144,"PermissaoConcDataHoraSol",true,5,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3145,85,"PERMISSAOCONCDATAHORALIB","","","PermissaoConcDataHoraLib","dtime",0,"px",16,16,"right",null,[],3145,"PermissaoConcDataHoraLib",true,5,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",86,0,"px",17,"px","e21kz2_client","","Cons","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e17kz2_client',rgrid:[this.GridContainer],fld:"vTIPOPERMISSAOFILTRO",gxz:"ZV30TipoPermissaoFiltro",gxold:"OV30TipoPermissaoFiltro",gxvar:"AV30TipoPermissaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TipoPermissaoFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30TipoPermissaoFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOPERMISSAOFILTRO",gx.O.AV30TipoPermissaoFiltro,0)},c2v:function(){gx.O.AV30TipoPermissaoFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOPERMISSAOFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPERMISSAODESCRICAOFILTRO",gxz:"ZV37TipoPermissaoDescricaoFiltro",gxold:"OV37TipoPermissaoDescricaoFiltro",gxvar:"AV37TipoPermissaoDescricaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TipoPermissaoDescricaoFiltro=Value},v2z:function(Value){gx.O.ZV37TipoPermissaoDescricaoFiltro=Value},v2c:function(){gx.fn.setControlValue("vTIPOPERMISSAODESCRICAOFILTRO",gx.O.AV37TipoPermissaoDescricaoFiltro,0)},c2v:function(){gx.O.AV37TipoPermissaoDescricaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPERMISSAODESCRICAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPERMISSAOEMPRESAIDFILTRO",gxz:"ZV31PermissaoEmpresaIdFiltro",gxold:"OV31PermissaoEmpresaIdFiltro",gxvar:"AV31PermissaoEmpresaIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31PermissaoEmpresaIdFiltro=Value},v2z:function(Value){gx.O.ZV31PermissaoEmpresaIdFiltro=Value},v2c:function(){gx.fn.setControlValue("vPERMISSAOEMPRESAIDFILTRO",gx.O.AV31PermissaoEmpresaIdFiltro,0)},c2v:function(){gx.O.AV31PermissaoEmpresaIdFiltro=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSAOEMPRESAIDFILTRO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPERMISSAOUSUARIOSOLFILTRO",gxz:"ZV32PermissaoUsuarioSolFiltro",gxold:"OV32PermissaoUsuarioSolFiltro",gxvar:"AV32PermissaoUsuarioSolFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32PermissaoUsuarioSolFiltro=Value},v2z:function(Value){gx.O.ZV32PermissaoUsuarioSolFiltro=Value},v2c:function(){gx.fn.setControlValue("vPERMISSAOUSUARIOSOLFILTRO",gx.O.AV32PermissaoUsuarioSolFiltro,0)},c2v:function(){gx.O.AV32PermissaoUsuarioSolFiltro=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSAOUSUARIOSOLFILTRO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[31]={fld:"TABLE11",grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERMISSAODATALIBFILTROINICIAL",gxz:"ZV41PermissaoDataLibFiltroInicial",gxold:"OV41PermissaoDataLibFiltroInicial",gxvar:"AV41PermissaoDataLibFiltroInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41PermissaoDataLibFiltroInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV41PermissaoDataLibFiltroInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPERMISSAODATALIBFILTROINICIAL",gx.O.AV41PermissaoDataLibFiltroInicial,0)},c2v:function(){gx.O.AV41PermissaoDataLibFiltroInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPERMISSAODATALIBFILTROINICIAL")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERMISSAODATALIBFILTROFINAL",gxz:"ZV42PermissaoDataLibFiltroFinal",gxold:"OV42PermissaoDataLibFiltroFinal",gxvar:"AV42PermissaoDataLibFiltroFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42PermissaoDataLibFiltroFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV42PermissaoDataLibFiltroFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPERMISSAODATALIBFILTROFINAL",gx.O.AV42PermissaoDataLibFiltroFinal,0)},c2v:function(){gx.O.AV42PermissaoDataLibFiltroFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPERMISSAODATALIBFILTROFINAL")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPERMISSAOUSUARIOLIBFILTRO",gxz:"ZV33PermissaoUsuarioLibFiltro",gxold:"OV33PermissaoUsuarioLibFiltro",gxvar:"AV33PermissaoUsuarioLibFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33PermissaoUsuarioLibFiltro=Value},v2z:function(Value){gx.O.ZV33PermissaoUsuarioLibFiltro=Value},v2c:function(){gx.fn.setControlValue("vPERMISSAOUSUARIOLIBFILTRO",gx.O.AV33PermissaoUsuarioLibFiltro,0)},c2v:function(){gx.O.AV33PermissaoUsuarioLibFiltro=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSAOUSUARIOLIBFILTRO")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   GXValidFnc[53]={fld:"TABLE6",grid:0};
   GXValidFnc[56]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[58]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[60]={fld:"IMAGE1",grid:0};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   GXValidFnc[64]={fld:"TABLE5",grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCSEQ",gxz:"Z3143PermissaoConcSeq",gxold:"O3143PermissaoConcSeq",gxvar:"A3143PermissaoConcSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3143PermissaoConcSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3143PermissaoConcSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOCONCSEQ",row || gx.fn.currentGridRowImpl(73),gx.O.A3143PermissaoConcSeq,0)},c2v:function(){gx.O.A3143PermissaoConcSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PERMISSAOCONCSEQ",row || gx.fn.currentGridRowImpl(73),'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:this.Valid_Tipopermissaoid,isvalid:null,rgrid:[],fld:"TIPOPERMISSAOID",gxz:"Z568TipoPermissaoId",gxold:"O568TipoPermissaoId",gxvar:"A568TipoPermissaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A568TipoPermissaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z568TipoPermissaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOPERMISSAOID",row || gx.fn.currentGridRowImpl(73),gx.O.A568TipoPermissaoId,0)},c2v:function(){gx.O.A568TipoPermissaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOPERMISSAOID",row || gx.fn.currentGridRowImpl(73),'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPERMISSAODESCRICAO",gxz:"ZV27TipoPermissaoDescricao",gxold:"OV27TipoPermissaoDescricao",gxvar:"AV27TipoPermissaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV27TipoPermissaoDescricao=Value},v2z:function(Value){gx.O.ZV27TipoPermissaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOPERMISSAODESCRICAO",row || gx.fn.currentGridRowImpl(73),gx.O.AV27TipoPermissaoDescricao,0)},c2v:function(){gx.O.AV27TipoPermissaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOPERMISSAODESCRICAO",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPERMISSAODESCRICAO",gxz:"Z557TipoPermissaoDescricao",gxold:"O557TipoPermissaoDescricao",gxvar:"A557TipoPermissaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A557TipoPermissaoDescricao=Value},v2z:function(Value){gx.O.Z557TipoPermissaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOPERMISSAODESCRICAO",row || gx.fn.currentGridRowImpl(73),gx.O.A557TipoPermissaoDescricao,0)},c2v:function(){gx.O.A557TipoPermissaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPERMISSAODESCRICAO",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUARIOSOLNOME",gxz:"Z3140PermissaoUsuarioSolNome",gxold:"O3140PermissaoUsuarioSolNome",gxvar:"A3140PermissaoUsuarioSolNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3140PermissaoUsuarioSolNome=Value},v2z:function(Value){gx.O.Z3140PermissaoUsuarioSolNome=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUARIOSOLNOME",row || gx.fn.currentGridRowImpl(73),gx.O.A3140PermissaoUsuarioSolNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3140PermissaoUsuarioSolNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUARIOSOLNOME",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUARIOLIBNOME",gxz:"Z3142PermissaoUsuarioLibNome",gxold:"O3142PermissaoUsuarioLibNome",gxvar:"A3142PermissaoUsuarioLibNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3142PermissaoUsuarioLibNome=Value},v2z:function(Value){gx.O.Z3142PermissaoUsuarioLibNome=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUARIOLIBNOME",row || gx.fn.currentGridRowImpl(73),gx.O.A3142PermissaoUsuarioLibNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3142PermissaoUsuarioLibNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUARIOLIBNOME",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCEMPRESAID",gxz:"Z3149PermissaoConcEmpresaId",gxold:"O3149PermissaoConcEmpresaId",gxvar:"A3149PermissaoConcEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3149PermissaoConcEmpresaId=Value},v2z:function(Value){gx.O.Z3149PermissaoConcEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOCONCEMPRESAID",row || gx.fn.currentGridRowImpl(73),gx.O.A3149PermissaoConcEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3149PermissaoConcEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOCONCEMPRESAID",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:this.Valid_Permissaoconcprogramasistema,isvalid:null,rgrid:[],fld:"PERMISSAOCONCPROGRAMASISTEMA",gxz:"Z3150PermissaoConcProgramaSistema",gxold:"O3150PermissaoConcProgramaSistema",gxvar:"A3150PermissaoConcProgramaSistema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3150PermissaoConcProgramaSistema=Value},v2z:function(Value){gx.O.Z3150PermissaoConcProgramaSistema=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOCONCPROGRAMASISTEMA",row || gx.fn.currentGridRowImpl(73),gx.O.A3150PermissaoConcProgramaSistema,0)},c2v:function(){gx.O.A3150PermissaoConcProgramaSistema=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOCONCPROGRAMASISTEMA",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPERMISSAOCONCPROGRAMANOMEGRID",gxz:"ZV29PermissaoConcProgramaNomeGrid",gxold:"OV29PermissaoConcProgramaNomeGrid",gxvar:"AV29PermissaoConcProgramaNomeGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29PermissaoConcProgramaNomeGrid=Value},v2z:function(Value){gx.O.ZV29PermissaoConcProgramaNomeGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vPERMISSAOCONCPROGRAMANOMEGRID",row || gx.fn.currentGridRowImpl(73),gx.O.AV29PermissaoConcProgramaNomeGrid,0)},c2v:function(){gx.O.AV29PermissaoConcProgramaNomeGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vPERMISSAOCONCPROGRAMANOMEGRID",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCPROGRAMANOME",gxz:"Z3152PermissaoConcProgramaNome",gxold:"O3152PermissaoConcProgramaNome",gxvar:"A3152PermissaoConcProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3152PermissaoConcProgramaNome=Value},v2z:function(Value){gx.O.Z3152PermissaoConcProgramaNome=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOCONCPROGRAMANOME",row || gx.fn.currentGridRowImpl(73),gx.O.A3152PermissaoConcProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3152PermissaoConcProgramaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOCONCPROGRAMANOME",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCDATAHORASOL",gxz:"Z3144PermissaoConcDataHoraSol",gxold:"O3144PermissaoConcDataHoraSol",gxvar:"A3144PermissaoConcDataHoraSol",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3144PermissaoConcDataHoraSol=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3144PermissaoConcDataHoraSol=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOCONCDATAHORASOL",row || gx.fn.currentGridRowImpl(73),gx.O.A3144PermissaoConcDataHoraSol,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3144PermissaoConcDataHoraSol=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PERMISSAOCONCDATAHORASOL",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCDATAHORALIB",gxz:"Z3145PermissaoConcDataHoraLib",gxold:"O3145PermissaoConcDataHoraLib",gxvar:"A3145PermissaoConcDataHoraLib",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3145PermissaoConcDataHoraLib=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3145PermissaoConcDataHoraLib=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOCONCDATAHORALIB",row || gx.fn.currentGridRowImpl(73),gx.O.A3145PermissaoConcDataHoraLib,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3145PermissaoConcDataHoraLib=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PERMISSAOCONCDATAHORALIB",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(73),gx.O.AV16bmpCon,gx.O.AV49Bmpcon_GXI)},c2v:function(){gx.O.AV49Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(73))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(73))}, gxvar_GXI:'AV49Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPERMISSAODATAHORALIBFILTROINICIAL",gxz:"ZV34PermissaoDataHoraLibFiltroInicial",gxold:"OV34PermissaoDataHoraLibFiltroInicial",gxvar:"AV34PermissaoDataHoraLibFiltroInicial",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34PermissaoDataHoraLibFiltroInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV34PermissaoDataHoraLibFiltroInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPERMISSAODATAHORALIBFILTROINICIAL",gx.O.AV34PermissaoDataHoraLibFiltroInicial,0)},c2v:function(){gx.O.AV34PermissaoDataHoraLibFiltroInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vPERMISSAODATAHORALIBFILTROINICIAL")},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPERMISSAODATAHORALIBFILTROFINAL",gxz:"ZV35PermissaoDataHoraLibFiltroFinal",gxold:"OV35PermissaoDataHoraLibFiltroFinal",gxvar:"AV35PermissaoDataHoraLibFiltroFinal",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35PermissaoDataHoraLibFiltroFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV35PermissaoDataHoraLibFiltroFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPERMISSAODATAHORALIBFILTROFINAL",gx.O.AV35PermissaoDataHoraLibFiltroFinal,0)},c2v:function(){gx.O.AV35PermissaoDataHoraLibFiltroFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vPERMISSAODATAHORALIBFILTROFINAL")},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV40Qtde",gxold:"OV40Qtde",gxvar:"AV40Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV40Qtde,0)},c2v:function(){gx.O.AV40Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[96]={fld:"JS", format:2,grid:0};
   GXValidFnc[98]={fld:"PROMPT_TIPOPERMISSAOFILTRO",grid:0};
   GXValidFnc[99]={fld:"PROMPT_PERMISSAOEMPRESAIDFILTRO",grid:0};
   GXValidFnc[100]={fld:"PROMPT_PERMISSAOUSUARIOSOLFILTRO",grid:0};
   GXValidFnc[101]={fld:"PROMPT_PERMISSAOUSUARIOLIBFILTRO",grid:0};
   this.AV30TipoPermissaoFiltro = 0 ;
   this.ZV30TipoPermissaoFiltro = 0 ;
   this.OV30TipoPermissaoFiltro = 0 ;
   this.AV37TipoPermissaoDescricaoFiltro = "" ;
   this.ZV37TipoPermissaoDescricaoFiltro = "" ;
   this.OV37TipoPermissaoDescricaoFiltro = "" ;
   this.AV31PermissaoEmpresaIdFiltro = "" ;
   this.ZV31PermissaoEmpresaIdFiltro = "" ;
   this.OV31PermissaoEmpresaIdFiltro = "" ;
   this.AV32PermissaoUsuarioSolFiltro = "" ;
   this.ZV32PermissaoUsuarioSolFiltro = "" ;
   this.OV32PermissaoUsuarioSolFiltro = "" ;
   this.AV41PermissaoDataLibFiltroInicial = gx.date.nullDate() ;
   this.ZV41PermissaoDataLibFiltroInicial = gx.date.nullDate() ;
   this.OV41PermissaoDataLibFiltroInicial = gx.date.nullDate() ;
   this.AV42PermissaoDataLibFiltroFinal = gx.date.nullDate() ;
   this.ZV42PermissaoDataLibFiltroFinal = gx.date.nullDate() ;
   this.OV42PermissaoDataLibFiltroFinal = gx.date.nullDate() ;
   this.AV33PermissaoUsuarioLibFiltro = "" ;
   this.ZV33PermissaoUsuarioLibFiltro = "" ;
   this.OV33PermissaoUsuarioLibFiltro = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3143PermissaoConcSeq = 0 ;
   this.O3143PermissaoConcSeq = 0 ;
   this.Z568TipoPermissaoId = 0 ;
   this.O568TipoPermissaoId = 0 ;
   this.ZV27TipoPermissaoDescricao = "" ;
   this.OV27TipoPermissaoDescricao = "" ;
   this.Z557TipoPermissaoDescricao = "" ;
   this.O557TipoPermissaoDescricao = "" ;
   this.Z3140PermissaoUsuarioSolNome = "" ;
   this.O3140PermissaoUsuarioSolNome = "" ;
   this.Z3142PermissaoUsuarioLibNome = "" ;
   this.O3142PermissaoUsuarioLibNome = "" ;
   this.Z3149PermissaoConcEmpresaId = "" ;
   this.O3149PermissaoConcEmpresaId = "" ;
   this.Z3150PermissaoConcProgramaSistema = "" ;
   this.O3150PermissaoConcProgramaSistema = "" ;
   this.ZV29PermissaoConcProgramaNomeGrid = "" ;
   this.OV29PermissaoConcProgramaNomeGrid = "" ;
   this.Z3152PermissaoConcProgramaNome = "" ;
   this.O3152PermissaoConcProgramaNome = "" ;
   this.Z3144PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.O3144PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.Z3145PermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.O3145PermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV34PermissaoDataHoraLibFiltroInicial = gx.date.nullDate() ;
   this.ZV34PermissaoDataHoraLibFiltroInicial = gx.date.nullDate() ;
   this.OV34PermissaoDataHoraLibFiltroInicial = gx.date.nullDate() ;
   this.AV35PermissaoDataHoraLibFiltroFinal = gx.date.nullDate() ;
   this.ZV35PermissaoDataHoraLibFiltroFinal = gx.date.nullDate() ;
   this.OV35PermissaoDataHoraLibFiltroFinal = gx.date.nullDate() ;
   this.AV40Qtde = 0 ;
   this.ZV40Qtde = 0 ;
   this.OV40Qtde = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV30TipoPermissaoFiltro = 0 ;
   this.AV37TipoPermissaoDescricaoFiltro = "" ;
   this.AV31PermissaoEmpresaIdFiltro = "" ;
   this.AV32PermissaoUsuarioSolFiltro = "" ;
   this.AV41PermissaoDataLibFiltroInicial = gx.date.nullDate() ;
   this.AV42PermissaoDataLibFiltroFinal = gx.date.nullDate() ;
   this.AV33PermissaoUsuarioLibFiltro = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV34PermissaoDataHoraLibFiltroInicial = gx.date.nullDate() ;
   this.AV35PermissaoDataHoraLibFiltroFinal = gx.date.nullDate() ;
   this.AV40Qtde = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A3141PermissaoUsuarioLibId = "" ;
   this.A3139PermissaoUsuarioSolId = "" ;
   this.A3151PermissaoConcProgramaId = 0 ;
   this.A3143PermissaoConcSeq = 0 ;
   this.A568TipoPermissaoId = 0 ;
   this.AV27TipoPermissaoDescricao = "" ;
   this.A557TipoPermissaoDescricao = "" ;
   this.A3140PermissaoUsuarioSolNome = "" ;
   this.A3142PermissaoUsuarioLibNome = "" ;
   this.A3149PermissaoConcEmpresaId = "" ;
   this.A3150PermissaoConcProgramaSistema = "" ;
   this.AV29PermissaoConcProgramaNomeGrid = "" ;
   this.A3152PermissaoConcProgramaNome = "" ;
   this.A3144PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.A3145PermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.AV16bmpCon = "" ;
   this.AV43SnRecuperaFiltro = "" ;
   this.AV47Pgmname = "" ;
   this.Events = {"e11kz2_client": ["'ANTERIOR'", true] ,"e12kz2_client": ["'PROXIMO'", true] ,"e15kz2_client": ["VPAGINA.CLICK", true] ,"e13kz2_client": ["'FECHAR'", true] ,"e14kz2_client": ["'IMPRIMIR'", true] ,"e16kz2_client": ["ENTER", true] ,"e21kz2_client": ["'CONSULTAR'", true] ,"e17kz2_client": ["VTIPOPERMISSAOFILTRO.ISVALID", true] ,"e22kz2_client": ["'ATUALIZAPAGINA'", true] ,"e24kz2_client": ["CANCEL", true] ,"e23kz2_client": ["'PROCURAR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30TipoPermissaoFiltro',fld:'vTIPOPERMISSAOFILTRO'},{av:'AV31PermissaoEmpresaIdFiltro',fld:'vPERMISSAOEMPRESAIDFILTRO'},{av:'AV32PermissaoUsuarioSolFiltro',fld:'vPERMISSAOUSUARIOSOLFILTRO'},{av:'AV33PermissaoUsuarioLibFiltro',fld:'vPERMISSAOUSUARIOLIBFILTRO'},{av:'AV34PermissaoDataHoraLibFiltroInicial',fld:'vPERMISSAODATAHORALIBFILTROINICIAL'},{av:'AV35PermissaoDataHoraLibFiltroFinal',fld:'vPERMISSAODATAHORALIBFILTROFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'A3152PermissaoConcProgramaNome',fld:'PERMISSAOCONCPROGRAMANOME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30TipoPermissaoFiltro',fld:'vTIPOPERMISSAOFILTRO'},{av:'AV31PermissaoEmpresaIdFiltro',fld:'vPERMISSAOEMPRESAIDFILTRO'},{av:'AV32PermissaoUsuarioSolFiltro',fld:'vPERMISSAOUSUARIOSOLFILTRO'},{av:'AV33PermissaoUsuarioLibFiltro',fld:'vPERMISSAOUSUARIOLIBFILTRO'},{av:'AV34PermissaoDataHoraLibFiltroInicial',fld:'vPERMISSAODATAHORALIBFILTROINICIAL'},{av:'AV35PermissaoDataHoraLibFiltroFinal',fld:'vPERMISSAODATAHORALIBFILTROFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'A3152PermissaoConcProgramaNome',fld:'PERMISSAOCONCPROGRAMANOME'}],[{ctrl:'PERMISSAOCONCSEQ',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERMISSAOCONCSEQ","Title")',ctrl:'PERMISSAOCONCSEQ',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vTIPOPERMISSAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vTIPOPERMISSAODESCRICAO","Title")',ctrl:'vTIPOPERMISSAODESCRICAO',prop:'Title'},{ctrl:'PERMISSAOUSUARIOSOLNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERMISSAOUSUARIOSOLNOME","Title")',ctrl:'PERMISSAOUSUARIOSOLNOME',prop:'Title'},{ctrl:'PERMISSAOUSUARIOLIBNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERMISSAOUSUARIOLIBNOME","Title")',ctrl:'PERMISSAOUSUARIOLIBNOME',prop:'Title'},{ctrl:'PERMISSAOCONCEMPRESAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERMISSAOCONCEMPRESAID","Title")',ctrl:'PERMISSAOCONCEMPRESAID',prop:'Title'},{ctrl:'PERMISSAOCONCPROGRAMASISTEMA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERMISSAOCONCPROGRAMASISTEMA","Title")',ctrl:'PERMISSAOCONCPROGRAMASISTEMA',prop:'Title'},{ctrl:'vPERMISSAOCONCPROGRAMANOMEGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vPERMISSAOCONCPROGRAMANOMEGRID","Title")',ctrl:'vPERMISSAOCONCPROGRAMANOMEGRID',prop:'Title'},{ctrl:'PERMISSAOCONCDATAHORASOL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERMISSAOCONCDATAHORASOL","Title")',ctrl:'PERMISSAOCONCDATAHORASOL',prop:'Title'},{ctrl:'PERMISSAOCONCDATAHORALIB',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERMISSAOCONCDATAHORALIB","Title")',ctrl:'PERMISSAOCONCDATAHORALIB',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30TipoPermissaoFiltro',fld:'vTIPOPERMISSAOFILTRO'},{av:'AV31PermissaoEmpresaIdFiltro',fld:'vPERMISSAOEMPRESAIDFILTRO'},{av:'AV32PermissaoUsuarioSolFiltro',fld:'vPERMISSAOUSUARIOSOLFILTRO'},{av:'AV33PermissaoUsuarioLibFiltro',fld:'vPERMISSAOUSUARIOLIBFILTRO'},{av:'AV41PermissaoDataLibFiltroInicial',fld:'vPERMISSAODATALIBFILTROINICIAL'},{av:'AV42PermissaoDataLibFiltroFinal',fld:'vPERMISSAODATALIBFILTROFINAL'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'A3152PermissaoConcProgramaNome',fld:'PERMISSAOCONCPROGRAMANOME'}],[{av:'AV27TipoPermissaoDescricao',fld:'vTIPOPERMISSAODESCRICAO'},{av:'AV29PermissaoConcProgramaNomeGrid',fld:'vPERMISSAOCONCPROGRAMANOMEGRID'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30TipoPermissaoFiltro',fld:'vTIPOPERMISSAOFILTRO'},{av:'AV31PermissaoEmpresaIdFiltro',fld:'vPERMISSAOEMPRESAIDFILTRO'},{av:'AV32PermissaoUsuarioSolFiltro',fld:'vPERMISSAOUSUARIOSOLFILTRO'},{av:'AV33PermissaoUsuarioLibFiltro',fld:'vPERMISSAOUSUARIOLIBFILTRO'},{av:'AV34PermissaoDataHoraLibFiltroInicial',fld:'vPERMISSAODATAHORALIBFILTROINICIAL'},{av:'AV35PermissaoDataHoraLibFiltroFinal',fld:'vPERMISSAODATAHORALIBFILTROFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'A3152PermissaoConcProgramaNome',fld:'PERMISSAOCONCPROGRAMANOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV41PermissaoDataLibFiltroInicial',fld:'vPERMISSAODATALIBFILTROINICIAL'},{av:'AV42PermissaoDataLibFiltroFinal',fld:'vPERMISSAODATALIBFILTROFINAL'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30TipoPermissaoFiltro',fld:'vTIPOPERMISSAOFILTRO'},{av:'AV31PermissaoEmpresaIdFiltro',fld:'vPERMISSAOEMPRESAIDFILTRO'},{av:'AV32PermissaoUsuarioSolFiltro',fld:'vPERMISSAOUSUARIOSOLFILTRO'},{av:'AV33PermissaoUsuarioLibFiltro',fld:'vPERMISSAOUSUARIOLIBFILTRO'},{av:'AV34PermissaoDataHoraLibFiltroInicial',fld:'vPERMISSAODATAHORALIBFILTROINICIAL'},{av:'AV35PermissaoDataHoraLibFiltroFinal',fld:'vPERMISSAODATAHORALIBFILTROFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'A3152PermissaoConcProgramaNome',fld:'PERMISSAOCONCPROGRAMANOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV41PermissaoDataLibFiltroInicial',fld:'vPERMISSAODATALIBFILTROINICIAL'},{av:'AV42PermissaoDataLibFiltroFinal',fld:'vPERMISSAODATALIBFILTROFINAL'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30TipoPermissaoFiltro',fld:'vTIPOPERMISSAOFILTRO'},{av:'AV31PermissaoEmpresaIdFiltro',fld:'vPERMISSAOEMPRESAIDFILTRO'},{av:'AV32PermissaoUsuarioSolFiltro',fld:'vPERMISSAOUSUARIOSOLFILTRO'},{av:'AV33PermissaoUsuarioLibFiltro',fld:'vPERMISSAOUSUARIOLIBFILTRO'},{av:'AV34PermissaoDataHoraLibFiltroInicial',fld:'vPERMISSAODATAHORALIBFILTROINICIAL'},{av:'AV35PermissaoDataHoraLibFiltroFinal',fld:'vPERMISSAODATAHORALIBFILTROFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'A3152PermissaoConcProgramaNome',fld:'PERMISSAOCONCPROGRAMANOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV41PermissaoDataLibFiltroInicial',fld:'vPERMISSAODATALIBFILTROINICIAL'},{av:'AV42PermissaoDataLibFiltroFinal',fld:'vPERMISSAODATALIBFILTROFINAL'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV47Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'AV30TipoPermissaoFiltro',fld:'vTIPOPERMISSAOFILTRO'},{av:'AV32PermissaoUsuarioSolFiltro',fld:'vPERMISSAOUSUARIOSOLFILTRO'},{av:'AV33PermissaoUsuarioLibFiltro',fld:'vPERMISSAOUSUARIOLIBFILTRO'},{av:'AV31PermissaoEmpresaIdFiltro',fld:'vPERMISSAOEMPRESAIDFILTRO'},{av:'AV34PermissaoDataHoraLibFiltroInicial',fld:'vPERMISSAODATAHORALIBFILTROINICIAL'},{av:'AV35PermissaoDataHoraLibFiltroFinal',fld:'vPERMISSAODATAHORALIBFILTROFINAL'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV48Pgmdesc',fld:'vPGMDESC'}],[{av:'AV36Ordenacao',fld:'vORDENACAO'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV44QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV35PermissaoDataHoraLibFiltroFinal',fld:'vPERMISSAODATAHORALIBFILTROFINAL'},{av:'AV34PermissaoDataHoraLibFiltroInicial',fld:'vPERMISSAODATAHORALIBFILTROINICIAL'},{av:'AV31PermissaoEmpresaIdFiltro',fld:'vPERMISSAOEMPRESAIDFILTRO'},{av:'AV33PermissaoUsuarioLibFiltro',fld:'vPERMISSAOUSUARIOLIBFILTRO'},{av:'AV32PermissaoUsuarioSolFiltro',fld:'vPERMISSAOUSUARIOSOLFILTRO'}]];
   this.EvtParms["'PROCURAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30TipoPermissaoFiltro',fld:'vTIPOPERMISSAOFILTRO'},{av:'AV31PermissaoEmpresaIdFiltro',fld:'vPERMISSAOEMPRESAIDFILTRO'},{av:'AV32PermissaoUsuarioSolFiltro',fld:'vPERMISSAOUSUARIOSOLFILTRO'},{av:'AV33PermissaoUsuarioLibFiltro',fld:'vPERMISSAOUSUARIOLIBFILTRO'},{av:'AV34PermissaoDataHoraLibFiltroInicial',fld:'vPERMISSAODATAHORALIBFILTROINICIAL'},{av:'AV35PermissaoDataHoraLibFiltroFinal',fld:'vPERMISSAODATAHORALIBFILTROFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'A3152PermissaoConcProgramaNome',fld:'PERMISSAOCONCPROGRAMANOME'},{av:'AV41PermissaoDataLibFiltroInicial',fld:'vPERMISSAODATALIBFILTROINICIAL'},{av:'AV42PermissaoDataLibFiltroFinal',fld:'vPERMISSAODATALIBFILTROFINAL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV42PermissaoDataLibFiltroFinal',fld:'vPERMISSAODATALIBFILTROFINAL'},{av:'AV34PermissaoDataHoraLibFiltroInicial',fld:'vPERMISSAODATAHORALIBFILTROINICIAL'},{av:'AV35PermissaoDataHoraLibFiltroFinal',fld:'vPERMISSAODATAHORALIBFILTROFINAL'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3143PermissaoConcSeq',fld:'PERMISSAOCONCSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30TipoPermissaoFiltro',fld:'vTIPOPERMISSAOFILTRO'},{av:'AV31PermissaoEmpresaIdFiltro',fld:'vPERMISSAOEMPRESAIDFILTRO'},{av:'AV32PermissaoUsuarioSolFiltro',fld:'vPERMISSAOUSUARIOSOLFILTRO'},{av:'AV33PermissaoUsuarioLibFiltro',fld:'vPERMISSAOUSUARIOLIBFILTRO'},{av:'AV41PermissaoDataLibFiltroInicial',fld:'vPERMISSAODATALIBFILTROINICIAL'},{av:'AV42PermissaoDataLibFiltroFinal',fld:'vPERMISSAODATALIBFILTROFINAL'},{av:'AV47Pgmname',fld:'vPGMNAME'}],[{av:'A3143PermissaoConcSeq',fld:'PERMISSAOCONCSEQ'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VTIPOPERMISSAOFILTRO.ISVALID"] = [[{av:'AV30TipoPermissaoFiltro',fld:'vTIPOPERMISSAOFILTRO'}],[{av:'AV37TipoPermissaoDescricaoFiltro',fld:'vTIPOPERMISSAODESCRICAOFILTRO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30TipoPermissaoFiltro',fld:'vTIPOPERMISSAOFILTRO'},{av:'AV31PermissaoEmpresaIdFiltro',fld:'vPERMISSAOEMPRESAIDFILTRO'},{av:'AV32PermissaoUsuarioSolFiltro',fld:'vPERMISSAOUSUARIOSOLFILTRO'},{av:'AV33PermissaoUsuarioLibFiltro',fld:'vPERMISSAOUSUARIOLIBFILTRO'},{av:'AV34PermissaoDataHoraLibFiltroInicial',fld:'vPERMISSAODATAHORALIBFILTROINICIAL'},{av:'AV35PermissaoDataHoraLibFiltroFinal',fld:'vPERMISSAODATAHORALIBFILTROFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'A3152PermissaoConcProgramaNome',fld:'PERMISSAOCONCPROGRAMANOME'}],[]];
   this.setPrompt("PROMPT_TIPOPERMISSAOFILTRO", [16]);
   this.setPrompt("PROMPT_PERMISSAOEMPRESAIDFILTRO", [22]);
   this.setPrompt("PROMPT_PERMISSAOUSUARIOSOLFILTRO", [27]);
   this.setPrompt("PROMPT_PERMISSAOUSUARIOLIBFILTRO", [43]);
   this.EnterCtrl = ["BUTTON2"];
   this.setVCMap("AV43SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV47Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV43SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV47Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar(this.GXValidFnc[95]);
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV43SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV47Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A557TipoPermissaoDescricao", rfrProp:"Value", gxAttId:"557"});
   GridContainer.addRefreshingVar({rfrVar:"A3152PermissaoConcProgramaNome", rfrProp:"Value", gxAttId:"3152"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hpermissaoconc());
