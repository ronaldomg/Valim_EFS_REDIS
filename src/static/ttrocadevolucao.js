/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:17:43.55
*/
gx.evt.autoSkip = false;
gx.define('ttrocadevolucao', false, function () {
   this.ServerClass =  "ttrocadevolucao" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A9795TrocaDevolucaoSaidaData=gx.fn.getDateValue("TROCADEVOLUCAOSAIDADATA") ;
      this.A9796TrocaDevolucaoEntradaData=gx.fn.getDateValue("TROCADEVOLUCAOENTRADADATA") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Trocadevolucaoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaonumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trocadevolucaonumero",["gx.O.A6348TrocaDevolucaoEmpresaId", "gx.O.A6349TrocaDevolucaoTipo", "gx.O.A6350TrocaDevolucaoNumero", "gx.O.A7520TrocaDevolucaoSituacao", "gx.O.A6338TrocaDevolucaoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A6339TrocaDevolucaoDataHoraAlt,"DMY4")', "gx.O.A6334TrocaDevolucaoSaidaEmpId", "gx.O.A6335TrocaDevolucaoSaidaId", "gx.O.A6336TrocaDevolucaoEntradaEmpId", "gx.O.A6337TrocaDevolucaoEntradaId"],["A6334TrocaDevolucaoSaidaEmpId", "A6335TrocaDevolucaoSaidaId", "A6336TrocaDevolucaoEntradaEmpId", "A6337TrocaDevolucaoEntradaId", "A7520TrocaDevolucaoSituacao", "A6338TrocaDevolucaoUsuarioAlt", "A6339TrocaDevolucaoDataHoraAlt", "A9795TrocaDevolucaoSaidaData", "A9796TrocaDevolucaoEntradaData", "Gx_mode", "Z6348TrocaDevolucaoEmpresaId", "Z6349TrocaDevolucaoTipo", "Z6350TrocaDevolucaoNumero", "Z6334TrocaDevolucaoSaidaEmpId", "Z6335TrocaDevolucaoSaidaId", "Z6336TrocaDevolucaoEntradaEmpId", "Z6337TrocaDevolucaoEntradaId", "Z7520TrocaDevolucaoSituacao", "Z6338TrocaDevolucaoUsuarioAlt", "Z6339TrocaDevolucaoDataHoraAlt", "Z9795TrocaDevolucaoSaidaData", "Z9796TrocaDevolucaoEntradaData", "Grid1", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Trocadevolucaosaidaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOSAIDAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaosaidaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trocadevolucaosaidaid",["gx.O.A6334TrocaDevolucaoSaidaEmpId", "gx.O.A6335TrocaDevolucaoSaidaId", 'gx.date.urlDate(gx.O.A9795TrocaDevolucaoSaidaData,"DMY4")'],["A9795TrocaDevolucaoSaidaData"]);
      return true;
   }
   this.Valid_Trocadevolucaoentradaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOENTRADAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaoentradaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trocadevolucaoentradaid",["gx.O.A6336TrocaDevolucaoEntradaEmpId", "gx.O.A6337TrocaDevolucaoEntradaId", 'gx.date.urlDate(gx.O.A9796TrocaDevolucaoEntradaData,"DMY4")'],["A9796TrocaDevolucaoEntradaData"]);
      return true;
   }
   this.Valid_Trocadevolucaoitemseq=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(64) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOITEMSEQ", gx.fn.currentGridRowImpl(64));
         this.AnyError  = 0;
         this.sMode507 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(507,64)  ;
         this.standaloneModal9A507( );
         this.standaloneNotModal9A507( );
         if ( gx.fn.gridDuplicateKey(66) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Item", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode507  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaoitemsaioriempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(64) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOITEMSAIORIEMPID", gx.fn.currentGridRowImpl(64));
         this.AnyError  = 0;
         this.sMode507 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(507,64)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode507  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaoitemsaioriid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(64) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOITEMSAIORIID", gx.fn.currentGridRowImpl(64));
         this.AnyError  = 0;
         this.sMode507 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(507,64)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode507  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaoitemsaioriseq=function()
   {
      this.sMode507 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(507,64)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Trocadevolucaoitemsaioriseq",["gx.O.A6340TrocaDevolucaoItemSaiOriEmpId", "gx.O.A6341TrocaDevolucaoItemSaiOriId", "gx.O.A6342TrocaDevolucaoItemSaiOriSeq"],[]);
      this.Gx_mode =  this.sMode507  ;
      return true;
   }
   this.Valid_Trocadevolucaoitementradaempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(64) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOITEMENTRADAEMPID", gx.fn.currentGridRowImpl(64));
         this.AnyError  = 0;
         this.sMode507 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(507,64)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode507  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaoitementradaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(64) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOITEMENTRADAID", gx.fn.currentGridRowImpl(64));
         this.AnyError  = 0;
         this.sMode507 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(507,64)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode507  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaoitementradaseq=function()
   {
      this.sMode507 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(507,64)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Trocadevolucaoitementradaseq",["gx.O.A6343TrocaDevolucaoItemEntradaEmpId", "gx.O.A6344TrocaDevolucaoItemEntradaId", "gx.O.A6345TrocaDevolucaoItemEntradaSeq"],[]);
      this.Gx_mode =  this.sMode507  ;
      return true;
   }
   this.Valid_Trocadevolucaoitemlotefilempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(64) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOITEMLOTEFILEMPID", gx.fn.currentGridRowImpl(64));
         this.AnyError  = 0;
         this.sMode507 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(507,64)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode507  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaoitemlotefilid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(64) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOITEMLOTEFILID", gx.fn.currentGridRowImpl(64));
         this.AnyError  = 0;
         this.sMode507 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(507,64)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode507  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaoitemloteproempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(64) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOITEMLOTEPROEMPID", gx.fn.currentGridRowImpl(64));
         this.AnyError  = 0;
         this.sMode507 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(507,64)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode507  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaoitemloteproid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(64) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TROCADEVOLUCAOITEMLOTEPROID", gx.fn.currentGridRowImpl(64));
         this.AnyError  = 0;
         this.sMode507 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(507,64)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode507  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trocadevolucaoitemlotecombina=function()
   {
      this.sMode507 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(507,64)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Trocadevolucaoitemlotecombina",["gx.O.A7521TrocaDevolucaoItemLoteFilEmpId", "gx.O.A7522TrocaDevolucaoItemLoteFilId", "gx.O.A7523TrocaDevolucaoItemLoteProEmpId", "gx.O.A7524TrocaDevolucaoItemLoteProId", "gx.O.A7525TrocaDevolucaoItemLoteCombina"],[]);
      this.Gx_mode =  this.sMode507  ;
      return true;
   }
   this.standaloneModal9A507=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("TROCADEVOLUCAOITEMSEQ","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("TROCADEVOLUCAOITEMSEQ","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal9A507=function()
   {
      return true;
   }
   this.e119a506_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e129a506_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e139a506_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,53,55,58,60,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,92,94,96,97];
   this.GXLastCtrlId =97;
   this.Grid1Container = new gx.grid.grid(this, 507,"Item",64,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"ttrocadevolucao",[6351],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_507",65,"vNRCDDELETED_507","","","nRcdDeleted_507","int",0,"px",4,1,"right",null,[],"nRcdDeleted_507","nRcdDeleted_507",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6351,66,"TROCADEVOLUCAOITEMSEQ","Sequência do item da troca","","TrocaDevolucaoItemSeq","int",0,"px",3,3,"right",null,[],6351,"TrocaDevolucaoItemSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6340,67,"TROCADEVOLUCAOITEMSAIORIEMPID","Empresa Saída Origem Troca/Devolução","","TrocaDevolucaoItemSaiOriEmpId","char",0,"px",10,10,"left",null,[],6340,"TrocaDevolucaoItemSaiOriEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6341,68,"TROCADEVOLUCAOITEMSAIORIID","Saída Origem Troca/DevoluçãoTroca Devolucao Item Sai Ori Id","","TrocaDevolucaoItemSaiOriId","int",0,"px",10,10,"right",null,[],6341,"TrocaDevolucaoItemSaiOriId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6342,69,"TROCADEVOLUCAOITEMSAIORISEQ","Item Saída Origem Troca/Devolução","","TrocaDevolucaoItemSaiOriSeq","int",0,"px",6,6,"right",null,[],6342,"TrocaDevolucaoItemSaiOriSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("prompt_6340_6341_6342","PROMPT_6340_6341_6342",98,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(6343,70,"TROCADEVOLUCAOITEMENTRADAEMPID","Empresa Entrada Origem Troca/Devolução","","TrocaDevolucaoItemEntradaEmpId","char",0,"px",10,10,"left",null,[],6343,"TrocaDevolucaoItemEntradaEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6344,71,"TROCADEVOLUCAOITEMENTRADAID","Entrada Origem Troca/Devolução","","TrocaDevolucaoItemEntradaId","int",0,"px",10,10,"right",null,[],6344,"TrocaDevolucaoItemEntradaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6345,72,"TROCADEVOLUCAOITEMENTRADASEQ","Item Entrada Origem Troca/Devolução","","TrocaDevolucaoItemEntradaSeq","int",0,"px",6,6,"right",null,[],6345,"TrocaDevolucaoItemEntradaSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("prompt_6343_6344_6345","PROMPT_6343_6344_6345",99,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(7521,73,"TROCADEVOLUCAOITEMLOTEFILEMPID","Empresa Filial Lote","","TrocaDevolucaoItemLoteFilEmpId","char",0,"px",10,10,"left",null,[],7521,"TrocaDevolucaoItemLoteFilEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7522,74,"TROCADEVOLUCAOITEMLOTEFILID","Filial Lote","","TrocaDevolucaoItemLoteFilId","int",0,"px",7,7,"right",null,[],7522,"TrocaDevolucaoItemLoteFilId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7523,75,"TROCADEVOLUCAOITEMLOTEPROEMPID","Empresa Produto Lote","","TrocaDevolucaoItemLoteProEmpId","char",0,"px",10,10,"left",null,[],7523,"TrocaDevolucaoItemLoteProEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7524,76,"TROCADEVOLUCAOITEMLOTEPROID","Produto Lote","","TrocaDevolucaoItemLoteProId","int",0,"px",10,10,"right",null,[],7524,"TrocaDevolucaoItemLoteProId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7525,77,"TROCADEVOLUCAOITEMLOTECOMBINA","Combinação Lote","","TrocaDevolucaoItemLoteCombina","char",0,"px",20,20,"left",null,[],7525,"TrocaDevolucaoItemLoteCombina",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("prompt_7521_7522_7523_7524_7525","PROMPT_7521_7522_7523_7524_7525",100,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(7526,78,"TROCADEVOLUCAOITEMCODBARRAS","Troca Devolucao Item Cod Barras","","TrocaDevolucaoItemCodBarras","int",0,"px",15,15,"right",null,[],7526,"TrocaDevolucaoItemCodBarras",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7527,79,"TROCADEVOLUCAOITEMVALOR","Valor","","TrocaDevolucaoItemValor","decimal",0,"px",22,22,"right",null,[],7527,"TrocaDevolucaoItemValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7528,80,"TROCADEVOLUCAOITEMQUANTIDADE","Quantidade","","TrocaDevolucaoItemQuantidade","decimal",0,"px",21,21,"right",null,[],7528,"TrocaDevolucaoItemQuantidade",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6346,81,"TROCADEVOLUCAOITEMUSUARIOALT","Usuário Alteração","","TrocaDevolucaoItemUsuarioAlt","char",0,"px",12,12,"left",null,[],6346,"TrocaDevolucaoItemUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6347,82,"TROCADEVOLUCAOITEMDATAHORAALT","Data/Hora Alteração","","TrocaDevolucaoItemDataHoraAlt","dtime",0,"px",16,16,"right",null,[],6347,"TrocaDevolucaoItemDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trocadevolucaoempresaid,isvalid:null,rgrid:[this.Grid1Container],fld:"TROCADEVOLUCAOEMPRESAID",gxz:"Z6348TrocaDevolucaoEmpresaId",gxold:"O6348TrocaDevolucaoEmpresaId",gxvar:"A6348TrocaDevolucaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6348TrocaDevolucaoEmpresaId=Value},v2z:function(Value){gx.O.Z6348TrocaDevolucaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("TROCADEVOLUCAOEMPRESAID",gx.O.A6348TrocaDevolucaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6348TrocaDevolucaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("TROCADEVOLUCAOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trocadevolucaotipo,isvalid:null,rgrid:[this.Grid1Container],fld:"TROCADEVOLUCAOTIPO",gxz:"Z6349TrocaDevolucaoTipo",gxold:"O6349TrocaDevolucaoTipo",gxvar:"A6349TrocaDevolucaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6349TrocaDevolucaoTipo=Value},v2z:function(Value){gx.O.Z6349TrocaDevolucaoTipo=Value},v2c:function(){gx.fn.setControlValue("TROCADEVOLUCAOTIPO",gx.O.A6349TrocaDevolucaoTipo,0)},c2v:function(){gx.O.A6349TrocaDevolucaoTipo=this.val()},val:function(){return gx.fn.getControlValue("TROCADEVOLUCAOTIPO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trocadevolucaonumero,isvalid:null,rgrid:[this.Grid1Container],fld:"TROCADEVOLUCAONUMERO",gxz:"Z6350TrocaDevolucaoNumero",gxold:"O6350TrocaDevolucaoNumero",gxvar:"A6350TrocaDevolucaoNumero",ucs:[],op:[45,40,35,30,60,55,50],ip:[45,40,35,30,60,55,50,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6350TrocaDevolucaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6350TrocaDevolucaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TROCADEVOLUCAONUMERO",gx.O.A6350TrocaDevolucaoNumero,0)},c2v:function(){gx.O.A6350TrocaDevolucaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TROCADEVOLUCAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trocadevolucaosaidaempid,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOSAIDAEMPID",gxz:"Z6334TrocaDevolucaoSaidaEmpId",gxold:"O6334TrocaDevolucaoSaidaEmpId",gxvar:"A6334TrocaDevolucaoSaidaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6334TrocaDevolucaoSaidaEmpId=Value},v2z:function(Value){gx.O.Z6334TrocaDevolucaoSaidaEmpId=Value},v2c:function(){gx.fn.setControlValue("TROCADEVOLUCAOSAIDAEMPID",gx.O.A6334TrocaDevolucaoSaidaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6334TrocaDevolucaoSaidaEmpId=this.val()},val:function(){return gx.fn.getControlValue("TROCADEVOLUCAOSAIDAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trocadevolucaosaidaid,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOSAIDAID",gxz:"Z6335TrocaDevolucaoSaidaId",gxold:"O6335TrocaDevolucaoSaidaId",gxvar:"A6335TrocaDevolucaoSaidaId",ucs:[],op:[],ip:[35,30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6335TrocaDevolucaoSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6335TrocaDevolucaoSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TROCADEVOLUCAOSAIDAID",gx.O.A6335TrocaDevolucaoSaidaId,0)},c2v:function(){gx.O.A6335TrocaDevolucaoSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TROCADEVOLUCAOSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trocadevolucaoentradaempid,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOENTRADAEMPID",gxz:"Z6336TrocaDevolucaoEntradaEmpId",gxold:"O6336TrocaDevolucaoEntradaEmpId",gxvar:"A6336TrocaDevolucaoEntradaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6336TrocaDevolucaoEntradaEmpId=Value},v2z:function(Value){gx.O.Z6336TrocaDevolucaoEntradaEmpId=Value},v2c:function(){gx.fn.setControlValue("TROCADEVOLUCAOENTRADAEMPID",gx.O.A6336TrocaDevolucaoEntradaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6336TrocaDevolucaoEntradaEmpId=this.val()},val:function(){return gx.fn.getControlValue("TROCADEVOLUCAOENTRADAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trocadevolucaoentradaid,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOENTRADAID",gxz:"Z6337TrocaDevolucaoEntradaId",gxold:"O6337TrocaDevolucaoEntradaId",gxvar:"A6337TrocaDevolucaoEntradaId",ucs:[],op:[],ip:[45,40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6337TrocaDevolucaoEntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6337TrocaDevolucaoEntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TROCADEVOLUCAOENTRADAID",gx.O.A6337TrocaDevolucaoEntradaId,0)},c2v:function(){gx.O.A6337TrocaDevolucaoEntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TROCADEVOLUCAOENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOSITUACAO",gxz:"Z7520TrocaDevolucaoSituacao",gxold:"O7520TrocaDevolucaoSituacao",gxvar:"A7520TrocaDevolucaoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7520TrocaDevolucaoSituacao=Value},v2z:function(Value){gx.O.Z7520TrocaDevolucaoSituacao=Value},v2c:function(){gx.fn.setControlValue("TROCADEVOLUCAOSITUACAO",gx.O.A7520TrocaDevolucaoSituacao,0)},c2v:function(){gx.O.A7520TrocaDevolucaoSituacao=this.val()},val:function(){return gx.fn.getControlValue("TROCADEVOLUCAOSITUACAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOUSUARIOALT",gxz:"Z6338TrocaDevolucaoUsuarioAlt",gxold:"O6338TrocaDevolucaoUsuarioAlt",gxvar:"A6338TrocaDevolucaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6338TrocaDevolucaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z6338TrocaDevolucaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TROCADEVOLUCAOUSUARIOALT",gx.O.A6338TrocaDevolucaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6338TrocaDevolucaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TROCADEVOLUCAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAODATAHORAALT",gxz:"Z6339TrocaDevolucaoDataHoraAlt",gxold:"O6339TrocaDevolucaoDataHoraAlt",gxvar:"A6339TrocaDevolucaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6339TrocaDevolucaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6339TrocaDevolucaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TROCADEVOLUCAODATAHORAALT",gx.O.A6339TrocaDevolucaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6339TrocaDevolucaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TROCADEVOLUCAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[65]={lvl:507,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_507",gxz:"ZnRcdDeleted_507",gxold:"OnRcdDeleted_507",gxvar:"nRcdDeleted_507",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_507=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_507=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_507",row || gx.fn.currentGridRowImpl(64),gx.O.nRcdDeleted_507,0)},c2v:function(){gx.O.nRcdDeleted_507=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_507",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:507,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:this.Valid_Trocadevolucaoitemseq,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMSEQ",gxz:"Z6351TrocaDevolucaoItemSeq",gxold:"O6351TrocaDevolucaoItemSeq",gxvar:"A6351TrocaDevolucaoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6351TrocaDevolucaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6351TrocaDevolucaoItemSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMSEQ",row || gx.fn.currentGridRowImpl(64),gx.O.A6351TrocaDevolucaoItemSeq,0)},c2v:function(){gx.O.A6351TrocaDevolucaoItemSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TROCADEVOLUCAOITEMSEQ",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:507,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:this.Valid_Trocadevolucaoitemsaioriempid,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMSAIORIEMPID",gxz:"Z6340TrocaDevolucaoItemSaiOriEmpId",gxold:"O6340TrocaDevolucaoItemSaiOriEmpId",gxvar:"A6340TrocaDevolucaoItemSaiOriEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6340TrocaDevolucaoItemSaiOriEmpId=Value},v2z:function(Value){gx.O.Z6340TrocaDevolucaoItemSaiOriEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMSAIORIEMPID",row || gx.fn.currentGridRowImpl(64),gx.O.A6340TrocaDevolucaoItemSaiOriEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6340TrocaDevolucaoItemSaiOriEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("TROCADEVOLUCAOITEMSAIORIEMPID",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:507,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:this.Valid_Trocadevolucaoitemsaioriid,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMSAIORIID",gxz:"Z6341TrocaDevolucaoItemSaiOriId",gxold:"O6341TrocaDevolucaoItemSaiOriId",gxvar:"A6341TrocaDevolucaoItemSaiOriId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6341TrocaDevolucaoItemSaiOriId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6341TrocaDevolucaoItemSaiOriId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMSAIORIID",row || gx.fn.currentGridRowImpl(64),gx.O.A6341TrocaDevolucaoItemSaiOriId,0)},c2v:function(){gx.O.A6341TrocaDevolucaoItemSaiOriId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TROCADEVOLUCAOITEMSAIORIID",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:507,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:this.Valid_Trocadevolucaoitemsaioriseq,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMSAIORISEQ",gxz:"Z6342TrocaDevolucaoItemSaiOriSeq",gxold:"O6342TrocaDevolucaoItemSaiOriSeq",gxvar:"A6342TrocaDevolucaoItemSaiOriSeq",ucs:[],op:[],ip:[69,68,67],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6342TrocaDevolucaoItemSaiOriSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6342TrocaDevolucaoItemSaiOriSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMSAIORISEQ",row || gx.fn.currentGridRowImpl(64),gx.O.A6342TrocaDevolucaoItemSaiOriSeq,0)},c2v:function(){gx.O.A6342TrocaDevolucaoItemSaiOriSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TROCADEVOLUCAOITEMSAIORISEQ",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:507,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:this.Valid_Trocadevolucaoitementradaempid,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMENTRADAEMPID",gxz:"Z6343TrocaDevolucaoItemEntradaEmpId",gxold:"O6343TrocaDevolucaoItemEntradaEmpId",gxvar:"A6343TrocaDevolucaoItemEntradaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6343TrocaDevolucaoItemEntradaEmpId=Value},v2z:function(Value){gx.O.Z6343TrocaDevolucaoItemEntradaEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMENTRADAEMPID",row || gx.fn.currentGridRowImpl(64),gx.O.A6343TrocaDevolucaoItemEntradaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6343TrocaDevolucaoItemEntradaEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("TROCADEVOLUCAOITEMENTRADAEMPID",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:507,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:this.Valid_Trocadevolucaoitementradaid,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMENTRADAID",gxz:"Z6344TrocaDevolucaoItemEntradaId",gxold:"O6344TrocaDevolucaoItemEntradaId",gxvar:"A6344TrocaDevolucaoItemEntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6344TrocaDevolucaoItemEntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6344TrocaDevolucaoItemEntradaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMENTRADAID",row || gx.fn.currentGridRowImpl(64),gx.O.A6344TrocaDevolucaoItemEntradaId,0)},c2v:function(){gx.O.A6344TrocaDevolucaoItemEntradaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TROCADEVOLUCAOITEMENTRADAID",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:507,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:this.Valid_Trocadevolucaoitementradaseq,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMENTRADASEQ",gxz:"Z6345TrocaDevolucaoItemEntradaSeq",gxold:"O6345TrocaDevolucaoItemEntradaSeq",gxvar:"A6345TrocaDevolucaoItemEntradaSeq",ucs:[],op:[],ip:[72,71,70],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6345TrocaDevolucaoItemEntradaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6345TrocaDevolucaoItemEntradaSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMENTRADASEQ",row || gx.fn.currentGridRowImpl(64),gx.O.A6345TrocaDevolucaoItemEntradaSeq,0)},c2v:function(){gx.O.A6345TrocaDevolucaoItemEntradaSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TROCADEVOLUCAOITEMENTRADASEQ",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:507,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:this.Valid_Trocadevolucaoitemlotefilempid,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMLOTEFILEMPID",gxz:"Z7521TrocaDevolucaoItemLoteFilEmpId",gxold:"O7521TrocaDevolucaoItemLoteFilEmpId",gxvar:"A7521TrocaDevolucaoItemLoteFilEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7521TrocaDevolucaoItemLoteFilEmpId=Value},v2z:function(Value){gx.O.Z7521TrocaDevolucaoItemLoteFilEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMLOTEFILEMPID",row || gx.fn.currentGridRowImpl(64),gx.O.A7521TrocaDevolucaoItemLoteFilEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7521TrocaDevolucaoItemLoteFilEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("TROCADEVOLUCAOITEMLOTEFILEMPID",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[74]={lvl:507,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:this.Valid_Trocadevolucaoitemlotefilid,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMLOTEFILID",gxz:"Z7522TrocaDevolucaoItemLoteFilId",gxold:"O7522TrocaDevolucaoItemLoteFilId",gxvar:"A7522TrocaDevolucaoItemLoteFilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7522TrocaDevolucaoItemLoteFilId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7522TrocaDevolucaoItemLoteFilId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMLOTEFILID",row || gx.fn.currentGridRowImpl(64),gx.O.A7522TrocaDevolucaoItemLoteFilId,0)},c2v:function(){gx.O.A7522TrocaDevolucaoItemLoteFilId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TROCADEVOLUCAOITEMLOTEFILID",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:507,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:this.Valid_Trocadevolucaoitemloteproempid,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMLOTEPROEMPID",gxz:"Z7523TrocaDevolucaoItemLoteProEmpId",gxold:"O7523TrocaDevolucaoItemLoteProEmpId",gxvar:"A7523TrocaDevolucaoItemLoteProEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7523TrocaDevolucaoItemLoteProEmpId=Value},v2z:function(Value){gx.O.Z7523TrocaDevolucaoItemLoteProEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMLOTEPROEMPID",row || gx.fn.currentGridRowImpl(64),gx.O.A7523TrocaDevolucaoItemLoteProEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7523TrocaDevolucaoItemLoteProEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("TROCADEVOLUCAOITEMLOTEPROEMPID",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:507,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:this.Valid_Trocadevolucaoitemloteproid,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMLOTEPROID",gxz:"Z7524TrocaDevolucaoItemLoteProId",gxold:"O7524TrocaDevolucaoItemLoteProId",gxvar:"A7524TrocaDevolucaoItemLoteProId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7524TrocaDevolucaoItemLoteProId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7524TrocaDevolucaoItemLoteProId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMLOTEPROID",row || gx.fn.currentGridRowImpl(64),gx.O.A7524TrocaDevolucaoItemLoteProId,0)},c2v:function(){gx.O.A7524TrocaDevolucaoItemLoteProId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TROCADEVOLUCAOITEMLOTEPROID",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:507,type:"char",len:20,dec:0,sign:false,ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:this.Valid_Trocadevolucaoitemlotecombina,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMLOTECOMBINA",gxz:"Z7525TrocaDevolucaoItemLoteCombina",gxold:"O7525TrocaDevolucaoItemLoteCombina",gxvar:"A7525TrocaDevolucaoItemLoteCombina",ucs:[],op:[],ip:[77,76,75,74,73],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7525TrocaDevolucaoItemLoteCombina=Value},v2z:function(Value){gx.O.Z7525TrocaDevolucaoItemLoteCombina=Value},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMLOTECOMBINA",row || gx.fn.currentGridRowImpl(64),gx.O.A7525TrocaDevolucaoItemLoteCombina,0)},c2v:function(){gx.O.A7525TrocaDevolucaoItemLoteCombina=this.val()},val:function(row){return gx.fn.getGridControlValue("TROCADEVOLUCAOITEMLOTECOMBINA",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:507,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMCODBARRAS",gxz:"Z7526TrocaDevolucaoItemCodBarras",gxold:"O7526TrocaDevolucaoItemCodBarras",gxvar:"A7526TrocaDevolucaoItemCodBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7526TrocaDevolucaoItemCodBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7526TrocaDevolucaoItemCodBarras=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMCODBARRAS",row || gx.fn.currentGridRowImpl(64),gx.O.A7526TrocaDevolucaoItemCodBarras,0)},c2v:function(){gx.O.A7526TrocaDevolucaoItemCodBarras=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TROCADEVOLUCAOITEMCODBARRAS",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:507,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMVALOR",gxz:"Z7527TrocaDevolucaoItemValor",gxold:"O7527TrocaDevolucaoItemValor",gxvar:"A7527TrocaDevolucaoItemValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7527TrocaDevolucaoItemValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7527TrocaDevolucaoItemValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("TROCADEVOLUCAOITEMVALOR",row || gx.fn.currentGridRowImpl(64),gx.O.A7527TrocaDevolucaoItemValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7527TrocaDevolucaoItemValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("TROCADEVOLUCAOITEMVALOR",row || gx.fn.currentGridRowImpl(64),'.',',')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:507,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMQUANTIDADE",gxz:"Z7528TrocaDevolucaoItemQuantidade",gxold:"O7528TrocaDevolucaoItemQuantidade",gxvar:"A7528TrocaDevolucaoItemQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7528TrocaDevolucaoItemQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7528TrocaDevolucaoItemQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("TROCADEVOLUCAOITEMQUANTIDADE",row || gx.fn.currentGridRowImpl(64),gx.O.A7528TrocaDevolucaoItemQuantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7528TrocaDevolucaoItemQuantidade=this.val()},val:function(row){return gx.fn.getGridDecimalValue("TROCADEVOLUCAOITEMQUANTIDADE",row || gx.fn.currentGridRowImpl(64),'.',',')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:507,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMUSUARIOALT",gxz:"Z6346TrocaDevolucaoItemUsuarioAlt",gxold:"O6346TrocaDevolucaoItemUsuarioAlt",gxvar:"A6346TrocaDevolucaoItemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6346TrocaDevolucaoItemUsuarioAlt=Value},v2z:function(Value){gx.O.Z6346TrocaDevolucaoItemUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMUSUARIOALT",row || gx.fn.currentGridRowImpl(64),gx.O.A6346TrocaDevolucaoItemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6346TrocaDevolucaoItemUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("TROCADEVOLUCAOITEMUSUARIOALT",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[82]={lvl:507,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:1,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMDATAHORAALT",gxz:"Z6347TrocaDevolucaoItemDataHoraAlt",gxold:"O6347TrocaDevolucaoItemDataHoraAlt",gxvar:"A6347TrocaDevolucaoItemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6347TrocaDevolucaoItemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6347TrocaDevolucaoItemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMDATAHORAALT",row || gx.fn.currentGridRowImpl(64),gx.O.A6347TrocaDevolucaoItemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6347TrocaDevolucaoItemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("TROCADEVOLUCAOITEMDATAHORAALT",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"BTNHELP",grid:0};
   GXValidFnc[96]={fld:"PROMPT_6334_6335",grid:506};
   GXValidFnc[97]={fld:"PROMPT_6336_6337",grid:506};
   this.A6348TrocaDevolucaoEmpresaId = "" ;
   this.Z6348TrocaDevolucaoEmpresaId = "" ;
   this.O6348TrocaDevolucaoEmpresaId = "" ;
   this.A6349TrocaDevolucaoTipo = "" ;
   this.Z6349TrocaDevolucaoTipo = "" ;
   this.O6349TrocaDevolucaoTipo = "" ;
   this.A6350TrocaDevolucaoNumero = 0 ;
   this.Z6350TrocaDevolucaoNumero = 0 ;
   this.O6350TrocaDevolucaoNumero = 0 ;
   this.A6334TrocaDevolucaoSaidaEmpId = "" ;
   this.Z6334TrocaDevolucaoSaidaEmpId = "" ;
   this.O6334TrocaDevolucaoSaidaEmpId = "" ;
   this.A6335TrocaDevolucaoSaidaId = 0 ;
   this.Z6335TrocaDevolucaoSaidaId = 0 ;
   this.O6335TrocaDevolucaoSaidaId = 0 ;
   this.A6336TrocaDevolucaoEntradaEmpId = "" ;
   this.Z6336TrocaDevolucaoEntradaEmpId = "" ;
   this.O6336TrocaDevolucaoEntradaEmpId = "" ;
   this.A6337TrocaDevolucaoEntradaId = 0 ;
   this.Z6337TrocaDevolucaoEntradaId = 0 ;
   this.O6337TrocaDevolucaoEntradaId = 0 ;
   this.A7520TrocaDevolucaoSituacao = "" ;
   this.Z7520TrocaDevolucaoSituacao = "" ;
   this.O7520TrocaDevolucaoSituacao = "" ;
   this.A6338TrocaDevolucaoUsuarioAlt = "" ;
   this.Z6338TrocaDevolucaoUsuarioAlt = "" ;
   this.O6338TrocaDevolucaoUsuarioAlt = "" ;
   this.A6339TrocaDevolucaoDataHoraAlt = gx.date.nullDate() ;
   this.Z6339TrocaDevolucaoDataHoraAlt = gx.date.nullDate() ;
   this.O6339TrocaDevolucaoDataHoraAlt = gx.date.nullDate() ;
   this.ZnRcdDeleted_507 = 0 ;
   this.OnRcdDeleted_507 = 0 ;
   this.Z6351TrocaDevolucaoItemSeq = 0 ;
   this.O6351TrocaDevolucaoItemSeq = 0 ;
   this.Z6340TrocaDevolucaoItemSaiOriEmpId = "" ;
   this.O6340TrocaDevolucaoItemSaiOriEmpId = "" ;
   this.Z6341TrocaDevolucaoItemSaiOriId = 0 ;
   this.O6341TrocaDevolucaoItemSaiOriId = 0 ;
   this.Z6342TrocaDevolucaoItemSaiOriSeq = 0 ;
   this.O6342TrocaDevolucaoItemSaiOriSeq = 0 ;
   this.Z6343TrocaDevolucaoItemEntradaEmpId = "" ;
   this.O6343TrocaDevolucaoItemEntradaEmpId = "" ;
   this.Z6344TrocaDevolucaoItemEntradaId = 0 ;
   this.O6344TrocaDevolucaoItemEntradaId = 0 ;
   this.Z6345TrocaDevolucaoItemEntradaSeq = 0 ;
   this.O6345TrocaDevolucaoItemEntradaSeq = 0 ;
   this.Z7521TrocaDevolucaoItemLoteFilEmpId = "" ;
   this.O7521TrocaDevolucaoItemLoteFilEmpId = "" ;
   this.Z7522TrocaDevolucaoItemLoteFilId = 0 ;
   this.O7522TrocaDevolucaoItemLoteFilId = 0 ;
   this.Z7523TrocaDevolucaoItemLoteProEmpId = "" ;
   this.O7523TrocaDevolucaoItemLoteProEmpId = "" ;
   this.Z7524TrocaDevolucaoItemLoteProId = 0 ;
   this.O7524TrocaDevolucaoItemLoteProId = 0 ;
   this.Z7525TrocaDevolucaoItemLoteCombina = "" ;
   this.O7525TrocaDevolucaoItemLoteCombina = "" ;
   this.Z7526TrocaDevolucaoItemCodBarras = 0 ;
   this.O7526TrocaDevolucaoItemCodBarras = 0 ;
   this.Z7527TrocaDevolucaoItemValor = 0 ;
   this.O7527TrocaDevolucaoItemValor = 0 ;
   this.Z7528TrocaDevolucaoItemQuantidade = 0 ;
   this.O7528TrocaDevolucaoItemQuantidade = 0 ;
   this.Z6346TrocaDevolucaoItemUsuarioAlt = "" ;
   this.O6346TrocaDevolucaoItemUsuarioAlt = "" ;
   this.Z6347TrocaDevolucaoItemDataHoraAlt = gx.date.nullDate() ;
   this.O6347TrocaDevolucaoItemDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A6351TrocaDevolucaoItemSeq = 0 ;
   this.A6340TrocaDevolucaoItemSaiOriEmpId = "" ;
   this.A6341TrocaDevolucaoItemSaiOriId = 0 ;
   this.A6342TrocaDevolucaoItemSaiOriSeq = 0 ;
   this.A6343TrocaDevolucaoItemEntradaEmpId = "" ;
   this.A6344TrocaDevolucaoItemEntradaId = 0 ;
   this.A6345TrocaDevolucaoItemEntradaSeq = 0 ;
   this.A7521TrocaDevolucaoItemLoteFilEmpId = "" ;
   this.A7522TrocaDevolucaoItemLoteFilId = 0 ;
   this.A7523TrocaDevolucaoItemLoteProEmpId = "" ;
   this.A7524TrocaDevolucaoItemLoteProId = 0 ;
   this.A7525TrocaDevolucaoItemLoteCombina = "" ;
   this.A7526TrocaDevolucaoItemCodBarras = 0 ;
   this.A7527TrocaDevolucaoItemValor = 0 ;
   this.A7528TrocaDevolucaoItemQuantidade = 0 ;
   this.A6346TrocaDevolucaoItemUsuarioAlt = "" ;
   this.A6347TrocaDevolucaoItemDataHoraAlt = gx.date.nullDate() ;
   this.AV8Logon = {} ;
   this.A6348TrocaDevolucaoEmpresaId = "" ;
   this.A6349TrocaDevolucaoTipo = "" ;
   this.A6350TrocaDevolucaoNumero = 0 ;
   this.A6334TrocaDevolucaoSaidaEmpId = "" ;
   this.A6335TrocaDevolucaoSaidaId = 0 ;
   this.A9795TrocaDevolucaoSaidaData = gx.date.nullDate() ;
   this.A6336TrocaDevolucaoEntradaEmpId = "" ;
   this.A6337TrocaDevolucaoEntradaId = 0 ;
   this.A9796TrocaDevolucaoEntradaData = gx.date.nullDate() ;
   this.A7520TrocaDevolucaoSituacao = "" ;
   this.A6338TrocaDevolucaoUsuarioAlt = "" ;
   this.A6339TrocaDevolucaoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e129a506_client": ["ENTER", true] ,"e139a506_client": ["CANCEL", true] ,"e119a506_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_6334_6335", [30,35]);
   this.setPrompt("PROMPT_6336_6337", [40,45]);
   this.setPrompt("PROMPT_6340_6341_6342", [67,68,69]);
   this.setPrompt("PROMPT_6343_6344_6345", [70,71,72]);
   this.setPrompt("PROMPT_7521_7522_7523_7524_7525", [73,74,75,76,77]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A9795TrocaDevolucaoSaidaData", "TROCADEVOLUCAOSAIDADATA", 0, "date");
   this.setVCMap("A9796TrocaDevolucaoEntradaData", "TROCADEVOLUCAOENTRADADATA", 0, "date");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new ttrocadevolucao());
