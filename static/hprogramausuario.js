/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:52:51.6
*/
gx.evt.autoSkip = false;
gx.define('hprogramausuario', false, function () {
   this.ServerClass =  "hprogramausuario" ;
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
      this.A506ProgramaUsuarioSnInclusao=gx.fn.getControlValue("PROGRAMAUSUARIOSNINCLUSAO") ;
      this.A507ProgramaUsuarioSnExclusao=gx.fn.getControlValue("PROGRAMAUSUARIOSNEXCLUSAO") ;
      this.A508ProgramaUsuarioSnAlteracao=gx.fn.getControlValue("PROGRAMAUSUARIOSNALTERACAO") ;
      this.A509ProgramaUsuarioSnConsulta=gx.fn.getControlValue("PROGRAMAUSUARIOSNCONSULTA") ;
   };
   this.Valid_Sistemaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(71) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SISTEMAID", gx.fn.currentGridRowImpl(71));
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
   this.Valid_Programaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(71) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROGRAMAID", gx.fn.currentGridRowImpl(71));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e113f2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e123f2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e233f2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e243f2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e253f2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e163f2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e133f2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e143f2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e153f2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e173f2_client=function()
   {
      this.executeServerEvent("'CADASTRARPROGRAMAS'", true, null, false, false);
   };
   this.e183f2_client=function()
   {
      this.executeServerEvent("'EXCLUIRPROGRAMAS'", true, null, false, false);
   };
   this.e193f2_client=function()
   {
      this.executeServerEvent("'COPIAR'", true, null, false, false);
   };
   this.e263f2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e273f2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e283f2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,26,29,31,32,35,37,42,45,48,50,52,54,56,58,60,62,65,67,68,72,73,74,75,76,77,78,79,80,81,82,89,90,91,92];
   this.GXLastCtrlId =92;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",71,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hprogramausuario",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(140,72,"SISTEMAID","","","SistemaId","char",0,"px",8,8,"left",null,[],140,"SistemaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(141,73,"PROGRAMAID","","","ProgramaId","int",0,"px",4,4,"right",null,[],141,"ProgramaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(145,74,"PROGRAMANOME","","","ProgramaNome","svchar",0,"px",40,40,"left",null,[],145,"ProgramaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(498,75,"PROGRAMALINK","Link","","ProgramaLink","svchar",0,"px",40,40,"left",null,[],498,"ProgramaLink",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmppis","vBMPPIS",76,0,"px",17,"px",null,"","Inclusão","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmppal","vBMPPAL",77,0,"px",17,"px",null,"","Alteração","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmppex","vBMPPEX",78,0,"px",17,"px",null,"","Exclusão","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmppco","vBMPPCO",79,0,"px",17,"px",null,"","Consulta","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",80,0,"px",17,"px","e233f2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",81,0,"px",17,"px","e243f2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",82,0,"px",17,"px","e253f2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE13",grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOID",gxz:"ZV17UsuarioId",gxold:"OV17UsuarioId",gxvar:"AV17UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17UsuarioId=Value},v2z:function(Value){gx.O.ZV17UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV17UsuarioId,0)},c2v:function(){gx.O.AV17UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV25UsuarioNome",gxold:"OV25UsuarioNome",gxvar:"AV25UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25UsuarioNome=Value},v2z:function(Value){gx.O.ZV25UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV25UsuarioNome,0)},c2v:function(){gx.O.AV25UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCSISTEMAID",gxz:"ZV18cSistemaId",gxold:"OV18cSistemaId",gxvar:"AV18cSistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18cSistemaId=Value},v2z:function(Value){gx.O.ZV18cSistemaId=Value},v2c:function(){gx.fn.setControlValue("vCSISTEMAID",gx.O.AV18cSistemaId,0)},c2v:function(){gx.O.AV18cSistemaId=this.val()},val:function(){return gx.fn.getControlValue("vCSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSISTEMANOME",gxz:"ZV34SistemaNome",gxold:"OV34SistemaNome",gxvar:"AV34SistemaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34SistemaNome=Value},v2z:function(Value){gx.O.ZV34SistemaNome=Value},v2c:function(){gx.fn.setControlValue("vSISTEMANOME",gx.O.AV34SistemaNome,0)},c2v:function(){gx.O.AV34SistemaNome=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMANOME")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPROGRAMAID",gxz:"ZV19cProgramaId",gxold:"OV19cProgramaId",gxvar:"AV19cProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19cProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19cProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPROGRAMAID",gx.O.AV19cProgramaId,0)},c2v:function(){gx.O.AV19cProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROGRAMANOME",gxz:"ZV35ProgramaNome",gxold:"OV35ProgramaNome",gxvar:"AV35ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ProgramaNome=Value},v2z:function(Value){gx.O.ZV35ProgramaNome=Value},v2c:function(){gx.fn.setControlValue("vPROGRAMANOME",gx.O.AV35ProgramaNome,0)},c2v:function(){gx.O.AV35ProgramaNome=this.val()},val:function(){return gx.fn.getControlValue("vPROGRAMANOME")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROGRAMALINK",gxz:"ZV38ProgramaLink",gxold:"OV38ProgramaLink",gxvar:"AV38ProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ProgramaLink=Value},v2z:function(Value){gx.O.ZV38ProgramaLink=Value},v2c:function(){gx.fn.setControlValue("vPROGRAMALINK",gx.O.AV38ProgramaLink,0)},c2v:function(){gx.O.AV38ProgramaLink=this.val()},val:function(){return gx.fn.getControlValue("vPROGRAMALINK")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLE4",grid:0};
   GXValidFnc[45]={fld:"TABLE8",grid:0};
   GXValidFnc[48]={fld:"IMAGE2",grid:0};
   GXValidFnc[50]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[52]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[54]={fld:"BTNCOPIAR",grid:0};
   GXValidFnc[56]={fld:"BTNCADPROGRAMAS",grid:0};
   GXValidFnc[58]={fld:"BTNEXCPROGRAMAS",grid:0};
   GXValidFnc[60]={fld:"BTNHELP",grid:0};
   GXValidFnc[62]={fld:"TABLE5",grid:0};
   GXValidFnc[65]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:71,gxgrid:this.GridContainer,fnc:this.Valid_Sistemaid,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[74,75],ip:[74,75,73,72],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(71),gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(71))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:71,gxgrid:this.GridContainer,fnc:this.Valid_Programaid,isvalid:null,rgrid:[],fld:"PROGRAMAID",gxz:"Z141ProgramaId",gxold:"O141ProgramaId",gxvar:"A141ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A141ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z141ProgramaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(71),gx.O.A141ProgramaId,0)},c2v:function(){gx.O.A141ProgramaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(71),'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:71,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOME",gxz:"Z145ProgramaNome",gxold:"O145ProgramaNome",gxvar:"A145ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A145ProgramaNome=Value},v2z:function(Value){gx.O.Z145ProgramaNome=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(71),gx.O.A145ProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A145ProgramaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(71))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:71,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMALINK",gxz:"Z498ProgramaLink",gxold:"O498ProgramaLink",gxvar:"A498ProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A498ProgramaLink=Value},v2z:function(Value){gx.O.Z498ProgramaLink=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMALINK",row || gx.fn.currentGridRowImpl(71),gx.O.A498ProgramaLink,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A498ProgramaLink=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMALINK",row || gx.fn.currentGridRowImpl(71))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:71,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPIS",gxz:"ZV23bmpPis",gxold:"OV23bmpPis",gxvar:"AV23bmpPis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23bmpPis=Value},v2z:function(Value){gx.O.ZV23bmpPis=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPIS",row || gx.fn.currentGridRowImpl(71),gx.O.AV23bmpPis,gx.O.AV47Bmppis_GXI)},c2v:function(){gx.O.AV47Bmppis_GXI=this.val_GXI();gx.O.AV23bmpPis=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPIS",row || gx.fn.currentGridRowImpl(71))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPIS_GXI",row || gx.fn.currentGridRowImpl(71))}, gxvar_GXI:'AV47Bmppis_GXI',nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:71,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPAL",gxz:"ZV20bmpPal",gxold:"OV20bmpPal",gxvar:"AV20bmpPal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20bmpPal=Value},v2z:function(Value){gx.O.ZV20bmpPal=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPAL",row || gx.fn.currentGridRowImpl(71),gx.O.AV20bmpPal,gx.O.AV49Bmppal_GXI)},c2v:function(){gx.O.AV49Bmppal_GXI=this.val_GXI();gx.O.AV20bmpPal=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPAL",row || gx.fn.currentGridRowImpl(71))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPAL_GXI",row || gx.fn.currentGridRowImpl(71))}, gxvar_GXI:'AV49Bmppal_GXI',nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:71,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPEX",gxz:"ZV21bmpPex",gxold:"OV21bmpPex",gxvar:"AV21bmpPex",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpPex=Value},v2z:function(Value){gx.O.ZV21bmpPex=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPEX",row || gx.fn.currentGridRowImpl(71),gx.O.AV21bmpPex,gx.O.AV48Bmppex_GXI)},c2v:function(){gx.O.AV48Bmppex_GXI=this.val_GXI();gx.O.AV21bmpPex=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPEX",row || gx.fn.currentGridRowImpl(71))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPEX_GXI",row || gx.fn.currentGridRowImpl(71))}, gxvar_GXI:'AV48Bmppex_GXI',nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:71,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPCO",gxz:"ZV22bmpPco",gxold:"OV22bmpPco",gxvar:"AV22bmpPco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpPco=Value},v2z:function(Value){gx.O.ZV22bmpPco=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPCO",row || gx.fn.currentGridRowImpl(71),gx.O.AV22bmpPco,gx.O.AV50Bmppco_GXI)},c2v:function(){gx.O.AV50Bmppco_GXI=this.val_GXI();gx.O.AV22bmpPco=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPCO",row || gx.fn.currentGridRowImpl(71))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPCO_GXI",row || gx.fn.currentGridRowImpl(71))}, gxvar_GXI:'AV50Bmppco_GXI',nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:71,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(71),gx.O.AV7bmpAlt,gx.O.AV44Bmpalt_GXI)},c2v:function(){gx.O.AV44Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(71))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(71))}, gxvar_GXI:'AV44Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:71,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(71),gx.O.AV8bmpExc,gx.O.AV45Bmpexc_GXI)},c2v:function(){gx.O.AV45Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(71))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(71))}, gxvar_GXI:'AV45Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:71,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(71),gx.O.AV16bmpCon,gx.O.AV46Bmpcon_GXI)},c2v:function(){gx.O.AV46Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(71))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(71))}, gxvar_GXI:'AV46Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"JS", format:2,grid:0};
   GXValidFnc[91]={fld:"PROMPT_CSISTEMAID",grid:0};
   GXValidFnc[92]={fld:"PROMPT_CPROGRAMAID",grid:0};
   this.AV17UsuarioId = "" ;
   this.ZV17UsuarioId = "" ;
   this.OV17UsuarioId = "" ;
   this.AV25UsuarioNome = "" ;
   this.ZV25UsuarioNome = "" ;
   this.OV25UsuarioNome = "" ;
   this.AV18cSistemaId = "" ;
   this.ZV18cSistemaId = "" ;
   this.OV18cSistemaId = "" ;
   this.AV34SistemaNome = "" ;
   this.ZV34SistemaNome = "" ;
   this.OV34SistemaNome = "" ;
   this.AV19cProgramaId = 0 ;
   this.ZV19cProgramaId = 0 ;
   this.OV19cProgramaId = 0 ;
   this.AV35ProgramaNome = "" ;
   this.ZV35ProgramaNome = "" ;
   this.OV35ProgramaNome = "" ;
   this.AV38ProgramaLink = "" ;
   this.ZV38ProgramaLink = "" ;
   this.OV38ProgramaLink = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.Z141ProgramaId = 0 ;
   this.O141ProgramaId = 0 ;
   this.Z145ProgramaNome = "" ;
   this.O145ProgramaNome = "" ;
   this.Z498ProgramaLink = "" ;
   this.O498ProgramaLink = "" ;
   this.ZV23bmpPis = "" ;
   this.OV23bmpPis = "" ;
   this.ZV20bmpPal = "" ;
   this.OV20bmpPal = "" ;
   this.ZV21bmpPex = "" ;
   this.OV21bmpPex = "" ;
   this.ZV22bmpPco = "" ;
   this.OV22bmpPco = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV17UsuarioId = "" ;
   this.AV25UsuarioNome = "" ;
   this.AV18cSistemaId = "" ;
   this.AV34SistemaNome = "" ;
   this.AV19cProgramaId = 0 ;
   this.AV35ProgramaNome = "" ;
   this.AV38ProgramaLink = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A506ProgramaUsuarioSnInclusao = "" ;
   this.A507ProgramaUsuarioSnExclusao = "" ;
   this.A508ProgramaUsuarioSnAlteracao = "" ;
   this.A509ProgramaUsuarioSnConsulta = "" ;
   this.A75UsuarioId = "" ;
   this.A140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.A145ProgramaNome = "" ;
   this.A498ProgramaLink = "" ;
   this.AV23bmpPis = "" ;
   this.AV20bmpPal = "" ;
   this.AV21bmpPex = "" ;
   this.AV22bmpPco = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV39SnRecuperaFiltro = "" ;
   this.Events = {"e113f2_client": ["'ANTERIOR'", true] ,"e123f2_client": ["'PROXIMO'", true] ,"e233f2_client": ["'ALTERAR'", true] ,"e243f2_client": ["'EXCLUIR'", true] ,"e253f2_client": ["'CONSULTAR'", true] ,"e163f2_client": ["VPAGINA.CLICK", true] ,"e133f2_client": ["'NOVO'", true] ,"e143f2_client": ["'FECHAR'", true] ,"e153f2_client": ["'PROCURAR'", true] ,"e173f2_client": ["'CADASTRARPROGRAMAS'", true] ,"e183f2_client": ["'EXCLUIRPROGRAMAS'", true] ,"e193f2_client": ["'COPIAR'", true] ,"e263f2_client": ["'ATUALIZAPAGINA'", true] ,"e273f2_client": ["ENTER", true] ,"e283f2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A506ProgramaUsuarioSnInclusao',fld:'PROGRAMAUSUARIOSNINCLUSAO'},{av:'A507ProgramaUsuarioSnExclusao',fld:'PROGRAMAUSUARIOSNEXCLUSAO'},{av:'A508ProgramaUsuarioSnAlteracao',fld:'PROGRAMAUSUARIOSNALTERACAO'},{av:'A509ProgramaUsuarioSnConsulta',fld:'PROGRAMAUSUARIOSNCONSULTA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A506ProgramaUsuarioSnInclusao',fld:'PROGRAMAUSUARIOSNINCLUSAO'},{av:'A507ProgramaUsuarioSnExclusao',fld:'PROGRAMAUSUARIOSNEXCLUSAO'},{av:'A508ProgramaUsuarioSnAlteracao',fld:'PROGRAMAUSUARIOSNALTERACAO'},{av:'A509ProgramaUsuarioSnConsulta',fld:'PROGRAMAUSUARIOSNCONSULTA'}],[{ctrl:'SISTEMAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMAID","Title")',ctrl:'SISTEMAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PROGRAMAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMAID","Title")',ctrl:'PROGRAMAID',prop:'Title'},{ctrl:'PROGRAMANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANOME","Title")',ctrl:'PROGRAMANOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV28filtros',fld:'vFILTROS'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV17UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A506ProgramaUsuarioSnInclusao',fld:'PROGRAMAUSUARIOSNINCLUSAO'},{av:'A507ProgramaUsuarioSnExclusao',fld:'PROGRAMAUSUARIOSNEXCLUSAO'},{av:'A508ProgramaUsuarioSnAlteracao',fld:'PROGRAMAUSUARIOSNALTERACAO'},{av:'A509ProgramaUsuarioSnConsulta',fld:'PROGRAMAUSUARIOSNCONSULTA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A506ProgramaUsuarioSnInclusao',fld:'PROGRAMAUSUARIOSNINCLUSAO'},{av:'A507ProgramaUsuarioSnExclusao',fld:'PROGRAMAUSUARIOSNEXCLUSAO'},{av:'A508ProgramaUsuarioSnAlteracao',fld:'PROGRAMAUSUARIOSNALTERACAO'},{av:'A509ProgramaUsuarioSnConsulta',fld:'PROGRAMAUSUARIOSNCONSULTA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A506ProgramaUsuarioSnInclusao',fld:'PROGRAMAUSUARIOSNINCLUSAO'},{av:'A507ProgramaUsuarioSnExclusao',fld:'PROGRAMAUSUARIOSNEXCLUSAO'},{av:'A508ProgramaUsuarioSnAlteracao',fld:'PROGRAMAUSUARIOSNALTERACAO'},{av:'A509ProgramaUsuarioSnConsulta',fld:'PROGRAMAUSUARIOSNCONSULTA'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV23bmpPis',fld:'vBMPPIS'},{av:'gx.fn.getCtrlProperty("vBMPPIS","Tooltiptext")',ctrl:'vBMPPIS',prop:'Tooltiptext'},{av:'AV21bmpPex',fld:'vBMPPEX'},{av:'gx.fn.getCtrlProperty("vBMPPEX","Tooltiptext")',ctrl:'vBMPPEX',prop:'Tooltiptext'},{av:'AV20bmpPal',fld:'vBMPPAL'},{av:'gx.fn.getCtrlProperty("vBMPPAL","Tooltiptext")',ctrl:'vBMPPAL',prop:'Tooltiptext'},{av:'AV22bmpPco',fld:'vBMPPCO'},{av:'gx.fn.getCtrlProperty("vBMPPCO","Tooltiptext")',ctrl:'vBMPPCO',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV25UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'}],[{av:'AV25UsuarioNome',fld:'vUSUARIONOME'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV25UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'}],[{av:'AV25UsuarioNome',fld:'vUSUARIONOME'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV25UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'}],[{av:'AV25UsuarioNome',fld:'vUSUARIONOME'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A506ProgramaUsuarioSnInclusao',fld:'PROGRAMAUSUARIOSNINCLUSAO'},{av:'A507ProgramaUsuarioSnExclusao',fld:'PROGRAMAUSUARIOSNEXCLUSAO'},{av:'A508ProgramaUsuarioSnAlteracao',fld:'PROGRAMAUSUARIOSNALTERACAO'},{av:'A509ProgramaUsuarioSnConsulta',fld:'PROGRAMAUSUARIOSNCONSULTA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV25UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV25UsuarioNome',fld:'vUSUARIONOME'},{av:'AV17UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A506ProgramaUsuarioSnInclusao',fld:'PROGRAMAUSUARIOSNINCLUSAO'},{av:'A507ProgramaUsuarioSnExclusao',fld:'PROGRAMAUSUARIOSNEXCLUSAO'},{av:'A508ProgramaUsuarioSnAlteracao',fld:'PROGRAMAUSUARIOSNALTERACAO'},{av:'A509ProgramaUsuarioSnConsulta',fld:'PROGRAMAUSUARIOSNCONSULTA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CADASTRARPROGRAMAS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A506ProgramaUsuarioSnInclusao',fld:'PROGRAMAUSUARIOSNINCLUSAO'},{av:'A507ProgramaUsuarioSnExclusao',fld:'PROGRAMAUSUARIOSNEXCLUSAO'},{av:'A508ProgramaUsuarioSnAlteracao',fld:'PROGRAMAUSUARIOSNALTERACAO'},{av:'A509ProgramaUsuarioSnConsulta',fld:'PROGRAMAUSUARIOSNCONSULTA'}],[{av:'AV30Tipo',fld:'vTIPO'},{av:'AV31GrupoId',fld:'vGRUPOID'}]];
   this.EvtParms["'EXCLUIRPROGRAMAS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A506ProgramaUsuarioSnInclusao',fld:'PROGRAMAUSUARIOSNINCLUSAO'},{av:'A507ProgramaUsuarioSnExclusao',fld:'PROGRAMAUSUARIOSNEXCLUSAO'},{av:'A508ProgramaUsuarioSnAlteracao',fld:'PROGRAMAUSUARIOSNALTERACAO'},{av:'A509ProgramaUsuarioSnConsulta',fld:'PROGRAMAUSUARIOSNCONSULTA'}],[]];
   this.EvtParms["'COPIAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A506ProgramaUsuarioSnInclusao',fld:'PROGRAMAUSUARIOSNINCLUSAO'},{av:'A507ProgramaUsuarioSnExclusao',fld:'PROGRAMAUSUARIOSNEXCLUSAO'},{av:'A508ProgramaUsuarioSnAlteracao',fld:'PROGRAMAUSUARIOSNALTERACAO'},{av:'A509ProgramaUsuarioSnConsulta',fld:'PROGRAMAUSUARIOSNCONSULTA'},{av:'AV25UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV25UsuarioNome',fld:'vUSUARIONOME'},{av:'AV17UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cSistemaId',fld:'vCSISTEMAID'},{av:'AV19cProgramaId',fld:'vCPROGRAMAID'},{av:'AV38ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A506ProgramaUsuarioSnInclusao',fld:'PROGRAMAUSUARIOSNINCLUSAO'},{av:'A507ProgramaUsuarioSnExclusao',fld:'PROGRAMAUSUARIOSNEXCLUSAO'},{av:'A508ProgramaUsuarioSnAlteracao',fld:'PROGRAMAUSUARIOSNALTERACAO'},{av:'A509ProgramaUsuarioSnConsulta',fld:'PROGRAMAUSUARIOSNCONSULTA'}],[]];
   this.setPrompt("PROMPT_CSISTEMAID", [25]);
   this.setPrompt("PROMPT_CPROGRAMAID", [31]);
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A506ProgramaUsuarioSnInclusao", "PROGRAMAUSUARIOSNINCLUSAO", 0, "char");
   this.setVCMap("A507ProgramaUsuarioSnExclusao", "PROGRAMAUSUARIOSNEXCLUSAO", 0, "char");
   this.setVCMap("A508ProgramaUsuarioSnAlteracao", "PROGRAMAUSUARIOSNALTERACAO", 0, "char");
   this.setVCMap("A509ProgramaUsuarioSnConsulta", "PROGRAMAUSUARIOSNCONSULTA", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A506ProgramaUsuarioSnInclusao", "PROGRAMAUSUARIOSNINCLUSAO", 0, "char");
   this.setVCMap("A507ProgramaUsuarioSnExclusao", "PROGRAMAUSUARIOSNEXCLUSAO", 0, "char");
   this.setVCMap("A508ProgramaUsuarioSnAlteracao", "PROGRAMAUSUARIOSNALTERACAO", 0, "char");
   this.setVCMap("A509ProgramaUsuarioSnConsulta", "PROGRAMAUSUARIOSNCONSULTA", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV39SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A506ProgramaUsuarioSnInclusao"});
   GridContainer.addRefreshingVar({rfrVar:"A507ProgramaUsuarioSnExclusao"});
   GridContainer.addRefreshingVar({rfrVar:"A508ProgramaUsuarioSnAlteracao"});
   GridContainer.addRefreshingVar({rfrVar:"A509ProgramaUsuarioSnConsulta"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hprogramausuario());
