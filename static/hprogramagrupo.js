/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:52:47.79
*/
gx.evt.autoSkip = false;
gx.define('hprogramagrupo', false, function () {
   this.ServerClass =  "hprogramagrupo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("5", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A502ProgramaGrupoSnInclusao=gx.fn.getControlValue("PROGRAMAGRUPOSNINCLUSAO") ;
      this.A503ProgramaGrupoSnExclusao=gx.fn.getControlValue("PROGRAMAGRUPOSNEXCLUSAO") ;
      this.A504ProgramaGrupoSnAlteracao=gx.fn.getControlValue("PROGRAMAGRUPOSNALTERACAO") ;
      this.A505ProgramaGrupoSnConsulta=gx.fn.getControlValue("PROGRAMAGRUPOSNCONSULTA") ;
      this.AV33SistemaId=gx.fn.getControlValue("vSISTEMAID") ;
      this.AV32ProgramaId=gx.fn.getIntegerValue("vPROGRAMAID",'.') ;
      this.A498ProgramaLink=gx.fn.getControlValue("PROGRAMALINK") ;
   };
   this.Valid_Sistemaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SISTEMAID", gx.fn.currentGridRowImpl(54));
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
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROGRAMAID", gx.fn.currentGridRowImpl(54));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sistemaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SISTEMAID", gx.fn.currentGridRowImpl(54));
         this.AnyError  = 0;

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
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROGRAMAID", gx.fn.currentGridRowImpl(54));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e113e2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e123e2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e223e2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e233e2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e243e2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e153e2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e133e2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e143e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e163e2_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", false, null, false, false);
   };
   this.e173e2_client=function()
   {
      this.executeServerEvent("'COPIARPERMISSAO'", true, null, false, false);
   };
   this.e183e2_client=function()
   {
      this.executeServerEvent("'CADASTRARPROGRAMAS'", true, null, false, false);
   };
   this.e253e2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e263e2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e273e2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,29,32,35,37,39,41,43,45,48,50,51,55,56,57,58,59,60,61,62,63,64,65,72,73,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hprogramagrupo",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(140,55,"SISTEMAID","","","SistemaId","char",0,"px",8,8,"left",null,[],140,"SistemaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(141,56,"PROGRAMAID","","","ProgramaId","int",0,"px",4,4,"right",null,[],141,"ProgramaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(145,57,"PROGRAMANOME","","","ProgramaNome","svchar",0,"px",40,40,"left",null,[],145,"ProgramaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Programalink",58,"vPROGRAMALINK","Link","","ProgramaLink","svchar",0,"px",40,40,"left",null,[],"Programalink","ProgramaLink",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmppis","vBMPPIS",59,0,"px",17,"px",null,"","Inclusão","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmppal","vBMPPAL",60,0,"px",17,"px",null,"","Alteração","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmppex","vBMPPEX",61,0,"px",17,"px",null,"","Exclusão","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmppco","vBMPPCO",62,0,"px",17,"px",null,"","Consulta","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",63,0,"px",17,"px","e223e2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",64,0,"px",17,"px","e233e2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",65,0,"px",17,"px","e243e2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOID",gxz:"ZV19GrupoId",gxold:"OV19GrupoId",gxvar:"AV19GrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19GrupoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19GrupoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOID",gx.O.AV19GrupoId,0)},c2v:function(){gx.O.AV19GrupoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPONOME",gxz:"ZV24GrupoNome",gxold:"OV24GrupoNome",gxvar:"AV24GrupoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24GrupoNome=Value},v2z:function(Value){gx.O.ZV24GrupoNome=Value},v2c:function(){gx.fn.setControlValue("vGRUPONOME",gx.O.AV24GrupoNome,0)},c2v:function(){gx.O.AV24GrupoNome=this.val()},val:function(){return gx.fn.getControlValue("vGRUPONOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCSISTEMAID",gxz:"ZV17cSistemaId",gxold:"OV17cSistemaId",gxvar:"AV17cSistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17cSistemaId=Value},v2z:function(Value){gx.O.ZV17cSistemaId=Value},v2c:function(){gx.fn.setControlValue("vCSISTEMAID",gx.O.AV17cSistemaId,0)},c2v:function(){gx.O.AV17cSistemaId=this.val()},val:function(){return gx.fn.getControlValue("vCSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPROGRAMAID",gxz:"ZV18cProgramaId",gxold:"OV18cProgramaId",gxvar:"AV18cProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18cProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18cProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPROGRAMAID",gx.O.AV18cProgramaId,0)},c2v:function(){gx.O.AV18cProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE4",grid:0};
   GXValidFnc[32]={fld:"TABLE6",grid:0};
   GXValidFnc[35]={fld:"IMAGE2",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNCOPIAR",grid:0};
   GXValidFnc[43]={fld:"BTNCADPROGRAMAS",grid:0};
   GXValidFnc[45]={fld:"TABLE5",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:this.Valid_Sistemaid,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[57],ip:[57,56,55],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(54),gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:this.Valid_Programaid,isvalid:null,rgrid:[],fld:"PROGRAMAID",gxz:"Z141ProgramaId",gxold:"O141ProgramaId",gxvar:"A141ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A141ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z141ProgramaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(54),gx.O.A141ProgramaId,0)},c2v:function(){gx.O.A141ProgramaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOME",gxz:"Z145ProgramaNome",gxold:"O145ProgramaNome",gxvar:"A145ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A145ProgramaNome=Value},v2z:function(Value){gx.O.Z145ProgramaNome=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(54),gx.O.A145ProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A145ProgramaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROGRAMALINK",gxz:"ZV31ProgramaLink",gxold:"OV31ProgramaLink",gxvar:"AV31ProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31ProgramaLink=Value},v2z:function(Value){gx.O.ZV31ProgramaLink=Value},v2c:function(row){gx.fn.setGridControlValue("vPROGRAMALINK",row || gx.fn.currentGridRowImpl(54),gx.O.AV31ProgramaLink,0)},c2v:function(){gx.O.AV31ProgramaLink=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROGRAMALINK",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPIS",gxz:"ZV20bmpPis",gxold:"OV20bmpPis",gxvar:"AV20bmpPis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20bmpPis=Value},v2z:function(Value){gx.O.ZV20bmpPis=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPIS",row || gx.fn.currentGridRowImpl(54),gx.O.AV20bmpPis,gx.O.AV42Bmppis_GXI)},c2v:function(){gx.O.AV42Bmppis_GXI=this.val_GXI();gx.O.AV20bmpPis=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPIS",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPIS_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV42Bmppis_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPAL",gxz:"ZV22bmpPal",gxold:"OV22bmpPal",gxvar:"AV22bmpPal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpPal=Value},v2z:function(Value){gx.O.ZV22bmpPal=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPAL",row || gx.fn.currentGridRowImpl(54),gx.O.AV22bmpPal,gx.O.AV44Bmppal_GXI)},c2v:function(){gx.O.AV44Bmppal_GXI=this.val_GXI();gx.O.AV22bmpPal=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPAL",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPAL_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV44Bmppal_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPEX",gxz:"ZV21bmpPex",gxold:"OV21bmpPex",gxvar:"AV21bmpPex",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpPex=Value},v2z:function(Value){gx.O.ZV21bmpPex=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPEX",row || gx.fn.currentGridRowImpl(54),gx.O.AV21bmpPex,gx.O.AV43Bmppex_GXI)},c2v:function(){gx.O.AV43Bmppex_GXI=this.val_GXI();gx.O.AV21bmpPex=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPEX",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPEX_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV43Bmppex_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPCO",gxz:"ZV23bmpPco",gxold:"OV23bmpPco",gxvar:"AV23bmpPco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23bmpPco=Value},v2z:function(Value){gx.O.ZV23bmpPco=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPCO",row || gx.fn.currentGridRowImpl(54),gx.O.AV23bmpPco,gx.O.AV45Bmppco_GXI)},c2v:function(){gx.O.AV45Bmppco_GXI=this.val_GXI();gx.O.AV23bmpPco=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPCO",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPCO_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV45Bmppco_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(54),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(54),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"PROMPT_CSISTEMAID",grid:0};
   GXValidFnc[74]={fld:"PROMPT_CPROGRAMAID",grid:0};
   this.AV19GrupoId = 0 ;
   this.ZV19GrupoId = 0 ;
   this.OV19GrupoId = 0 ;
   this.AV24GrupoNome = "" ;
   this.ZV24GrupoNome = "" ;
   this.OV24GrupoNome = "" ;
   this.AV17cSistemaId = "" ;
   this.ZV17cSistemaId = "" ;
   this.OV17cSistemaId = "" ;
   this.AV18cProgramaId = 0 ;
   this.ZV18cProgramaId = 0 ;
   this.OV18cProgramaId = 0 ;
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
   this.ZV31ProgramaLink = "" ;
   this.OV31ProgramaLink = "" ;
   this.ZV20bmpPis = "" ;
   this.OV20bmpPis = "" ;
   this.ZV22bmpPal = "" ;
   this.OV22bmpPal = "" ;
   this.ZV21bmpPex = "" ;
   this.OV21bmpPex = "" ;
   this.ZV23bmpPco = "" ;
   this.OV23bmpPco = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV19GrupoId = 0 ;
   this.AV24GrupoNome = "" ;
   this.AV17cSistemaId = "" ;
   this.AV18cProgramaId = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A502ProgramaGrupoSnInclusao = "" ;
   this.A503ProgramaGrupoSnExclusao = "" ;
   this.A504ProgramaGrupoSnAlteracao = "" ;
   this.A505ProgramaGrupoSnConsulta = "" ;
   this.A244GrupoId = 0 ;
   this.A140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.A145ProgramaNome = "" ;
   this.AV31ProgramaLink = "" ;
   this.AV20bmpPis = "" ;
   this.AV22bmpPal = "" ;
   this.AV21bmpPex = "" ;
   this.AV23bmpPco = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A498ProgramaLink = "" ;
   this.AV34SnRecuperaFiltro = "" ;
   this.AV33SistemaId = "" ;
   this.AV32ProgramaId = 0 ;
   this.Events = {"e113e2_client": ["'ANTERIOR'", true] ,"e123e2_client": ["'PROXIMO'", true] ,"e223e2_client": ["'ALTERAR'", true] ,"e233e2_client": ["'EXCLUIR'", true] ,"e243e2_client": ["'CONSULTAR'", true] ,"e153e2_client": ["VPAGINA.CLICK", true] ,"e133e2_client": ["'NOVO'", true] ,"e143e2_client": ["'FECHAR'", true] ,"e163e2_client": ["'ATUALIZAR'", true] ,"e173e2_client": ["'COPIARPERMISSAO'", true] ,"e183e2_client": ["'CADASTRARPROGRAMAS'", true] ,"e253e2_client": ["'ATUALIZAPAGINA'", true] ,"e263e2_client": ["ENTER", true] ,"e273e2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A502ProgramaGrupoSnInclusao',fld:'PROGRAMAGRUPOSNINCLUSAO'},{av:'A503ProgramaGrupoSnExclusao',fld:'PROGRAMAGRUPOSNEXCLUSAO'},{av:'A504ProgramaGrupoSnAlteracao',fld:'PROGRAMAGRUPOSNALTERACAO'},{av:'A505ProgramaGrupoSnConsulta',fld:'PROGRAMAGRUPOSNCONSULTA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV33SistemaId',fld:'vSISTEMAID'},{av:'AV32ProgramaId',fld:'vPROGRAMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A502ProgramaGrupoSnInclusao',fld:'PROGRAMAGRUPOSNINCLUSAO'},{av:'A503ProgramaGrupoSnExclusao',fld:'PROGRAMAGRUPOSNEXCLUSAO'},{av:'A504ProgramaGrupoSnAlteracao',fld:'PROGRAMAGRUPOSNALTERACAO'},{av:'A505ProgramaGrupoSnConsulta',fld:'PROGRAMAGRUPOSNCONSULTA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV33SistemaId',fld:'vSISTEMAID'},{av:'AV32ProgramaId',fld:'vPROGRAMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'}],[{ctrl:'SISTEMAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMAID","Title")',ctrl:'SISTEMAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PROGRAMAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMAID","Title")',ctrl:'PROGRAMAID',prop:'Title'},{ctrl:'PROGRAMANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANOME","Title")',ctrl:'PROGRAMANOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV28filtros',fld:'vFILTROS'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV24GrupoNome',fld:'vGRUPONOME'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A502ProgramaGrupoSnInclusao',fld:'PROGRAMAGRUPOSNINCLUSAO'},{av:'A503ProgramaGrupoSnExclusao',fld:'PROGRAMAGRUPOSNEXCLUSAO'},{av:'A504ProgramaGrupoSnAlteracao',fld:'PROGRAMAGRUPOSNALTERACAO'},{av:'A505ProgramaGrupoSnConsulta',fld:'PROGRAMAGRUPOSNCONSULTA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV33SistemaId',fld:'vSISTEMAID'},{av:'AV32ProgramaId',fld:'vPROGRAMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24GrupoNome',fld:'vGRUPONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A502ProgramaGrupoSnInclusao',fld:'PROGRAMAGRUPOSNINCLUSAO'},{av:'A503ProgramaGrupoSnExclusao',fld:'PROGRAMAGRUPOSNEXCLUSAO'},{av:'A504ProgramaGrupoSnAlteracao',fld:'PROGRAMAGRUPOSNALTERACAO'},{av:'A505ProgramaGrupoSnConsulta',fld:'PROGRAMAGRUPOSNCONSULTA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV33SistemaId',fld:'vSISTEMAID'},{av:'AV32ProgramaId',fld:'vPROGRAMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV24GrupoNome',fld:'vGRUPONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A502ProgramaGrupoSnInclusao',fld:'PROGRAMAGRUPOSNINCLUSAO'},{av:'A503ProgramaGrupoSnExclusao',fld:'PROGRAMAGRUPOSNEXCLUSAO'},{av:'A504ProgramaGrupoSnAlteracao',fld:'PROGRAMAGRUPOSNALTERACAO'},{av:'A505ProgramaGrupoSnConsulta',fld:'PROGRAMAGRUPOSNCONSULTA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV33SistemaId',fld:'vSISTEMAID'},{av:'AV32ProgramaId',fld:'vPROGRAMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV20bmpPis',fld:'vBMPPIS'},{av:'gx.fn.getCtrlProperty("vBMPPIS","Tooltiptext")',ctrl:'vBMPPIS',prop:'Tooltiptext'},{av:'AV21bmpPex',fld:'vBMPPEX'},{av:'gx.fn.getCtrlProperty("vBMPPEX","Tooltiptext")',ctrl:'vBMPPEX',prop:'Tooltiptext'},{av:'AV22bmpPal',fld:'vBMPPAL'},{av:'gx.fn.getCtrlProperty("vBMPPAL","Tooltiptext")',ctrl:'vBMPPAL',prop:'Tooltiptext'},{av:'AV23bmpPco',fld:'vBMPPCO'},{av:'gx.fn.getCtrlProperty("vBMPPCO","Tooltiptext")',ctrl:'vBMPPCO',prop:'Tooltiptext'},{av:'AV33SistemaId',fld:'vSISTEMAID'},{av:'AV32ProgramaId',fld:'vPROGRAMAID'},{av:'AV31ProgramaLink',fld:'vPROGRAMALINK'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV24GrupoNome',fld:'vGRUPONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV24GrupoNome',fld:'vGRUPONOME'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV24GrupoNome',fld:'vGRUPONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV24GrupoNome',fld:'vGRUPONOME'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV24GrupoNome',fld:'vGRUPONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV24GrupoNome',fld:'vGRUPONOME'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A502ProgramaGrupoSnInclusao',fld:'PROGRAMAGRUPOSNINCLUSAO'},{av:'A503ProgramaGrupoSnExclusao',fld:'PROGRAMAGRUPOSNEXCLUSAO'},{av:'A504ProgramaGrupoSnAlteracao',fld:'PROGRAMAGRUPOSNALTERACAO'},{av:'A505ProgramaGrupoSnConsulta',fld:'PROGRAMAGRUPOSNCONSULTA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV33SistemaId',fld:'vSISTEMAID'},{av:'AV32ProgramaId',fld:'vPROGRAMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24GrupoNome',fld:'vGRUPONOME'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV24GrupoNome',fld:'vGRUPONOME'}],[{av:'AV24GrupoNome',fld:'vGRUPONOME'},{av:'AV19GrupoId',fld:'vGRUPOID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A502ProgramaGrupoSnInclusao',fld:'PROGRAMAGRUPOSNINCLUSAO'},{av:'A503ProgramaGrupoSnExclusao',fld:'PROGRAMAGRUPOSNEXCLUSAO'},{av:'A504ProgramaGrupoSnAlteracao',fld:'PROGRAMAGRUPOSNALTERACAO'},{av:'A505ProgramaGrupoSnConsulta',fld:'PROGRAMAGRUPOSNCONSULTA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV33SistemaId',fld:'vSISTEMAID'},{av:'AV32ProgramaId',fld:'vPROGRAMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24GrupoNome',fld:'vGRUPONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'COPIARPERMISSAO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A502ProgramaGrupoSnInclusao',fld:'PROGRAMAGRUPOSNINCLUSAO'},{av:'A503ProgramaGrupoSnExclusao',fld:'PROGRAMAGRUPOSNEXCLUSAO'},{av:'A504ProgramaGrupoSnAlteracao',fld:'PROGRAMAGRUPOSNALTERACAO'},{av:'A505ProgramaGrupoSnConsulta',fld:'PROGRAMAGRUPOSNCONSULTA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV33SistemaId',fld:'vSISTEMAID'},{av:'AV32ProgramaId',fld:'vPROGRAMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'},{av:'AV24GrupoNome',fld:'vGRUPONOME'}],[{av:'AV24GrupoNome',fld:'vGRUPONOME'},{av:'AV19GrupoId',fld:'vGRUPOID'}]];
   this.EvtParms["'CADASTRARPROGRAMAS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A502ProgramaGrupoSnInclusao',fld:'PROGRAMAGRUPOSNINCLUSAO'},{av:'A503ProgramaGrupoSnExclusao',fld:'PROGRAMAGRUPOSNEXCLUSAO'},{av:'A504ProgramaGrupoSnAlteracao',fld:'PROGRAMAGRUPOSNALTERACAO'},{av:'A505ProgramaGrupoSnConsulta',fld:'PROGRAMAGRUPOSNCONSULTA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV33SistemaId',fld:'vSISTEMAID'},{av:'AV32ProgramaId',fld:'vPROGRAMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'},{av:'AV9UsrCod',fld:'vUSRCOD'}],[{av:'AV29Tipo',fld:'vTIPO'},{av:'AV30UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cSistemaId',fld:'vCSISTEMAID'},{av:'AV18cProgramaId',fld:'vCPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19GrupoId',fld:'vGRUPOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A502ProgramaGrupoSnInclusao',fld:'PROGRAMAGRUPOSNINCLUSAO'},{av:'A503ProgramaGrupoSnExclusao',fld:'PROGRAMAGRUPOSNEXCLUSAO'},{av:'A504ProgramaGrupoSnAlteracao',fld:'PROGRAMAGRUPOSNALTERACAO'},{av:'A505ProgramaGrupoSnConsulta',fld:'PROGRAMAGRUPOSNCONSULTA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV33SistemaId',fld:'vSISTEMAID'},{av:'AV32ProgramaId',fld:'vPROGRAMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'}],[]];
   this.setPrompt("PROMPT_CSISTEMAID", [19]);
   this.setPrompt("PROMPT_CPROGRAMAID", [24]);
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A502ProgramaGrupoSnInclusao", "PROGRAMAGRUPOSNINCLUSAO", 0, "char");
   this.setVCMap("A503ProgramaGrupoSnExclusao", "PROGRAMAGRUPOSNEXCLUSAO", 0, "char");
   this.setVCMap("A504ProgramaGrupoSnAlteracao", "PROGRAMAGRUPOSNALTERACAO", 0, "char");
   this.setVCMap("A505ProgramaGrupoSnConsulta", "PROGRAMAGRUPOSNCONSULTA", 0, "char");
   this.setVCMap("AV33SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV32ProgramaId", "vPROGRAMAID", 0, "int");
   this.setVCMap("A498ProgramaLink", "PROGRAMALINK", 0, "svchar");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A502ProgramaGrupoSnInclusao", "PROGRAMAGRUPOSNINCLUSAO", 0, "char");
   this.setVCMap("A503ProgramaGrupoSnExclusao", "PROGRAMAGRUPOSNEXCLUSAO", 0, "char");
   this.setVCMap("A504ProgramaGrupoSnAlteracao", "PROGRAMAGRUPOSNALTERACAO", 0, "char");
   this.setVCMap("A505ProgramaGrupoSnConsulta", "PROGRAMAGRUPOSNCONSULTA", 0, "char");
   this.setVCMap("AV33SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV32ProgramaId", "vPROGRAMAID", 0, "int");
   this.setVCMap("A498ProgramaLink", "PROGRAMALINK", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A502ProgramaGrupoSnInclusao"});
   GridContainer.addRefreshingVar({rfrVar:"A503ProgramaGrupoSnExclusao"});
   GridContainer.addRefreshingVar({rfrVar:"A504ProgramaGrupoSnAlteracao"});
   GridContainer.addRefreshingVar({rfrVar:"A505ProgramaGrupoSnConsulta"});
   GridContainer.addRefreshingVar({rfrVar:"A140SistemaId", rfrProp:"Value", gxAttId:"140"});
   GridContainer.addRefreshingVar({rfrVar:"A141ProgramaId", rfrProp:"Value", gxAttId:"141"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SistemaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV32ProgramaId"});
   GridContainer.addRefreshingVar({rfrVar:"A498ProgramaLink"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hprogramagrupo());
