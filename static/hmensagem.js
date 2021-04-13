/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:2:22.68
*/
gx.evt.autoSkip = false;
gx.define('hmensagem', false, function () {
   this.ServerClass =  "hmensagem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV22UsuarioId=gx.fn.getControlValue("vUSUARIOID") ;
      this.A359MensagemUsuarioSnLida=gx.fn.getControlValue("MENSAGEMUSUARIOSNLIDA") ;
      this.AV28SnPosiciona=gx.fn.getControlValue("vSNPOSICIONA") ;
   };
   this.Validv_Mensagemrecebidalida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMENSAGEMRECEBIDALIDA");
         this.AnyError  = 0;
         if ( ! ( this.AV14MensagemRecebidaLida == "N" || this.AV14MensagemRecebidaLida == "S" || (""==this.AV14MensagemRecebidaLida) ) )
         {
            try {
               gxballoon.setError("Campo MensagemRecebidaLida fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Mensagemrecebidanaolida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMENSAGEMRECEBIDANAOLIDA");
         this.AnyError  = 0;
         if ( ! ( this.AV15MensagemRecebidaNaoLida == "N" || this.AV15MensagemRecebidaNaoLida == "S" || (""==this.AV15MensagemRecebidaNaoLida) ) )
         {
            try {
               gxballoon.setError("Campo MensagemRecebidaNaoLida fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Usuarioid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(65) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("USUARIOID", gx.fn.currentGridRowImpl(65));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Usuarioid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(65) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("USUARIOID", gx.fn.currentGridRowImpl(65));
         this.AnyError  = 0;
         this.standaloneModal2S3( );
         this.standaloneNotModal2S3( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112s2_client=function()
   {
      this.executeServerEvent("'NOVAMENSAGEM'", true, null, false, false);
   };
   this.e162s2_client=function()
   {
      this.executeServerEvent("'ENCAMINHAR'", true, arguments[0], false, false);
   };
   this.e172s2_client=function()
   {
      this.executeServerEvent("'RESPONDER'", true, arguments[0], false, false);
   };
   this.e182s2_client=function()
   {
      this.executeServerEvent("'LER'", true, arguments[0], false, false);
   };
   this.e122s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132s2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e192s2_client=function()
   {
      this.executeServerEvent("'EXCLUIRECEBIDA'", true, arguments[0], false, false);
   };
   this.e202s2_client=function()
   {
      this.executeServerEvent("'MARCARLIDO'", true, arguments[0], false, false);
   };
   this.e222s2_client=function()
   {
      this.executeServerEvent("'EXCLUIENVIADA'", true, arguments[0], false, false);
   };
   this.e232s2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,9,12,15,18,20,22,24,31,33,34,35,36,37,38,39,40,41,42,43,44,47,50,53,55,64,66,67,68,69,70,71,72,73,74,75];
   this.GXLastCtrlId =75;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",32,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmensagem",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(364,33,"USUARIOENVIOUNOME","De","","UsuarioEnviouNome","svchar",0,"px",35,35,"left",null,[],364,"UsuarioEnviouNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(356,34,"MENSAGEMUSUARIODATA","Data/Hora de Ocorrência","","MensagemUsuarioData","dtime",0,"px",16,16,"right",null,[],356,"MensagemUsuarioData",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(357,35,"MENSAGEMUSUARIODATAAPRESENTACA","Data/Hora de Apresentação","","MensagemUsuarioDataApresentaca","dtime",0,"px",16,16,"right",null,[],357,"MensagemUsuarioDataApresentaca",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(358,36,"MENSAGEMUSUARIOASSUNTO","Assunto","","MensagemUsuarioAssunto","svchar",0,"px",80,80,"left",null,[],358,"MensagemUsuarioAssunto",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpler","vBMPLER",37,0,"px",17,"px","e182s2_client","","","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmplid","vBMPLID",38,0,"px",17,"px","e202s2_client","","","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpres","vBMPRES",39,0,"px",17,"px","e172s2_client","","","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpenc","vBMPENC",40,0,"px",17,"px","e162s2_client","","","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",41,0,"px",17,"px","e192s2_client","","","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(365,42,"MENSAGEMUSUARIOID","Número da Mensagem","","MensagemUsuarioId","int",0,"px",7,7,"right",null,[],365,"MensagemUsuarioId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   this.Grid1Container = new gx.grid.grid(this, 3,"WbpLvl3",65,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hmensagem",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(219,66,"USUARIONOME","Para","","UsuarioNome","svchar",0,"px",35,35,"left",null,[],219,"UsuarioNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(356,67,"MENSAGEMUSUARIODATA","Data/Hora de Ocorrência","","MensagemUsuarioData","dtime",0,"px",16,16,"right",null,[],356,"MensagemUsuarioData",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(357,68,"MENSAGEMUSUARIODATAAPRESENTACA","Data/Hora de Apresentação","","MensagemUsuarioDataApresentaca","dtime",0,"px",16,16,"right",null,[],357,"MensagemUsuarioDataApresentaca",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(358,69,"MENSAGEMUSUARIOASSUNTO","Assunto","","MensagemUsuarioAssunto","svchar",0,"px",80,80,"left",null,[],358,"MensagemUsuarioAssunto",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpmsg","vBMPMSG",70,0,"px",17,"px",null,"","Lido","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmplee","vBMPLEE",71,0,"px",17,"px","e182s2_client","","","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpexe","vBMPEXE",72,0,"px",17,"px","e222s2_client","","","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit("Mensagemusuarioid",73,"vMENSAGEMUSUARIOID","Número da Mensagem","","MensagemUsuarioId","int",0,"px",7,7,"right",null,[],"Mensagemusuarioid","MensagemUsuarioId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(75,74,"USUARIOID","Usuário","","UsuarioId","char",0,"px",12,12,"left",null,[],75,"UsuarioId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 8, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV30Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV30Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hmensagem_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE9",grid:0};
   GXValidFnc[5]={fld:"IMGNEWMSG",grid:0};
   GXValidFnc[9]={fld:"TAB1",grid:0};
   GXValidFnc[12]={fld:"TABLE12",grid:0};
   GXValidFnc[15]={fld:"TABLE13",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIODEENVIOID",gxz:"ZV13UsuarioDeEnvioId",gxold:"OV13UsuarioDeEnvioId",gxvar:"AV13UsuarioDeEnvioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV13UsuarioDeEnvioId=Value},v2z:function(Value){gx.O.ZV13UsuarioDeEnvioId=Value},v2c:function(){gx.fn.setComboBoxValue("vUSUARIODEENVIOID",gx.O.AV13UsuarioDeEnvioId)},c2v:function(){gx.O.AV13UsuarioDeEnvioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIODEENVIOID")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Mensagemrecebidalida,isvalid:null,rgrid:[this.GridContainer],fld:"vMENSAGEMRECEBIDALIDA",gxz:"ZV14MensagemRecebidaLida",gxold:"OV14MensagemRecebidaLida",gxvar:"AV14MensagemRecebidaLida",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV14MensagemRecebidaLida=Value},v2z:function(Value){gx.O.ZV14MensagemRecebidaLida=Value},v2c:function(){gx.fn.setCheckBoxValue("vMENSAGEMRECEBIDALIDA",gx.O.AV14MensagemRecebidaLida,"S")},c2v:function(){gx.O.AV14MensagemRecebidaLida=this.val()},val:function(){return gx.fn.getControlValue("vMENSAGEMRECEBIDALIDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Mensagemrecebidanaolida,isvalid:null,rgrid:[this.GridContainer],fld:"vMENSAGEMRECEBIDANAOLIDA",gxz:"ZV15MensagemRecebidaNaoLida",gxold:"OV15MensagemRecebidaNaoLida",gxvar:"AV15MensagemRecebidaNaoLida",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15MensagemRecebidaNaoLida=Value},v2z:function(Value){gx.O.ZV15MensagemRecebidaNaoLida=Value},v2c:function(){gx.fn.setCheckBoxValue("vMENSAGEMRECEBIDANAOLIDA",gx.O.AV15MensagemRecebidaNaoLida,"S")},c2v:function(){gx.O.AV15MensagemRecebidaNaoLida=this.val()},val:function(){return gx.fn.getControlValue("vMENSAGEMRECEBIDANAOLIDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[33]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOENVIOUNOME",gxz:"Z364UsuarioEnviouNome",gxold:"O364UsuarioEnviouNome",gxvar:"A364UsuarioEnviouNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A364UsuarioEnviouNome=Value},v2z:function(Value){gx.O.Z364UsuarioEnviouNome=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOENVIOUNOME",row || gx.fn.currentGridRowImpl(32),gx.O.A364UsuarioEnviouNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A364UsuarioEnviouNome=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOENVIOUNOME",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIODATA",gxz:"Z356MensagemUsuarioData",gxold:"O356MensagemUsuarioData",gxvar:"A356MensagemUsuarioData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A356MensagemUsuarioData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z356MensagemUsuarioData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIODATA",row || gx.fn.currentGridRowImpl(32),gx.O.A356MensagemUsuarioData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A356MensagemUsuarioData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MENSAGEMUSUARIODATA",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIODATAAPRESENTACA",gxz:"Z357MensagemUsuarioDataApresentaca",gxold:"O357MensagemUsuarioDataApresentaca",gxvar:"A357MensagemUsuarioDataApresentaca",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIODATAAPRESENTACA",row || gx.fn.currentGridRowImpl(32),gx.O.A357MensagemUsuarioDataApresentaca,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MENSAGEMUSUARIODATAAPRESENTACA",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIOASSUNTO",gxz:"Z358MensagemUsuarioAssunto",gxold:"O358MensagemUsuarioAssunto",gxvar:"A358MensagemUsuarioAssunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A358MensagemUsuarioAssunto=Value},v2z:function(Value){gx.O.Z358MensagemUsuarioAssunto=Value},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIOASSUNTO",row || gx.fn.currentGridRowImpl(32),gx.O.A358MensagemUsuarioAssunto,0)},c2v:function(){gx.O.A358MensagemUsuarioAssunto=this.val()},val:function(row){return gx.fn.getGridControlValue("MENSAGEMUSUARIOASSUNTO",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLER",gxz:"ZV26bmpLer",gxold:"OV26bmpLer",gxvar:"AV26bmpLer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26bmpLer=Value},v2z:function(Value){gx.O.ZV26bmpLer=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLER",row || gx.fn.currentGridRowImpl(32),gx.O.AV26bmpLer,gx.O.AV40Bmpler_GXI)},c2v:function(){gx.O.AV40Bmpler_GXI=this.val_GXI();gx.O.AV26bmpLer=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLER",row || gx.fn.currentGridRowImpl(32))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLER_GXI",row || gx.fn.currentGridRowImpl(32))}, gxvar_GXI:'AV40Bmpler_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLID",gxz:"ZV16bmpLid",gxold:"OV16bmpLid",gxvar:"AV16bmpLid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpLid=Value},v2z:function(Value){gx.O.ZV16bmpLid=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLID",row || gx.fn.currentGridRowImpl(32),gx.O.AV16bmpLid,gx.O.AV38Bmplid_GXI)},c2v:function(){gx.O.AV38Bmplid_GXI=this.val_GXI();gx.O.AV16bmpLid=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLID",row || gx.fn.currentGridRowImpl(32))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLID_GXI",row || gx.fn.currentGridRowImpl(32))}, gxvar_GXI:'AV38Bmplid_GXI',nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPRES",gxz:"ZV17bmpRes",gxold:"OV17bmpRes",gxvar:"AV17bmpRes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17bmpRes=Value},v2z:function(Value){gx.O.ZV17bmpRes=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPRES",row || gx.fn.currentGridRowImpl(32),gx.O.AV17bmpRes,gx.O.AV39Bmpres_GXI)},c2v:function(){gx.O.AV39Bmpres_GXI=this.val_GXI();gx.O.AV17bmpRes=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPRES",row || gx.fn.currentGridRowImpl(32))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPRES_GXI",row || gx.fn.currentGridRowImpl(32))}, gxvar_GXI:'AV39Bmpres_GXI',nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPENC",gxz:"ZV18bmpEnc",gxold:"OV18bmpEnc",gxvar:"AV18bmpEnc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18bmpEnc=Value},v2z:function(Value){gx.O.ZV18bmpEnc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPENC",row || gx.fn.currentGridRowImpl(32),gx.O.AV18bmpEnc,gx.O.AV36Bmpenc_GXI)},c2v:function(){gx.O.AV36Bmpenc_GXI=this.val_GXI();gx.O.AV18bmpEnc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPENC",row || gx.fn.currentGridRowImpl(32))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPENC_GXI",row || gx.fn.currentGridRowImpl(32))}, gxvar_GXI:'AV36Bmpenc_GXI',nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV5bmpExc",gxold:"OV5bmpExc",gxvar:"AV5bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpExc=Value},v2z:function(Value){gx.O.ZV5bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(32),gx.O.AV5bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV5bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(32))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(32))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIOID",gxz:"Z365MensagemUsuarioId",gxold:"O365MensagemUsuarioId",gxvar:"A365MensagemUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A365MensagemUsuarioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z365MensagemUsuarioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIOID",row || gx.fn.currentGridRowImpl(32),gx.O.A365MensagemUsuarioId,0)},c2v:function(){gx.O.A365MensagemUsuarioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENSAGEMUSUARIOID",row || gx.fn.currentGridRowImpl(32),'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[44]={fld:"TAB2",grid:0};
   GXValidFnc[47]={fld:"TABLE14",grid:0};
   GXValidFnc[50]={fld:"TABLE15",grid:0};
   GXValidFnc[53]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vUSUARIODERECEBIDAID",gxz:"ZV19UsuarioDeRecebidaId",gxold:"OV19UsuarioDeRecebidaId",gxvar:"AV19UsuarioDeRecebidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV19UsuarioDeRecebidaId=Value},v2z:function(Value){gx.O.ZV19UsuarioDeRecebidaId=Value},v2c:function(){gx.fn.setComboBoxValue("vUSUARIODERECEBIDAID",gx.O.AV19UsuarioDeRecebidaId)},c2v:function(){gx.O.AV19UsuarioDeRecebidaId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIODERECEBIDAID")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[66]={lvl:3,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIONOME",gxz:"Z219UsuarioNome",gxold:"O219UsuarioNome",gxvar:"A219UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A219UsuarioNome=Value},v2z:function(Value){gx.O.Z219UsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIONOME",row || gx.fn.currentGridRowImpl(65),gx.O.A219UsuarioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A219UsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIONOME",row || gx.fn.currentGridRowImpl(65))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:3,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIODATA",gxz:"Z356MensagemUsuarioData",gxold:"O356MensagemUsuarioData",gxvar:"A356MensagemUsuarioData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A356MensagemUsuarioData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z356MensagemUsuarioData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIODATA",row || gx.fn.currentGridRowImpl(65),gx.O.A356MensagemUsuarioData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A356MensagemUsuarioData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MENSAGEMUSUARIODATA",row || gx.fn.currentGridRowImpl(65))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:3,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIODATAAPRESENTACA",gxz:"Z357MensagemUsuarioDataApresentaca",gxold:"O357MensagemUsuarioDataApresentaca",gxvar:"A357MensagemUsuarioDataApresentaca",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIODATAAPRESENTACA",row || gx.fn.currentGridRowImpl(65),gx.O.A357MensagemUsuarioDataApresentaca,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MENSAGEMUSUARIODATAAPRESENTACA",row || gx.fn.currentGridRowImpl(65))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:3,type:"svchar",len:80,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIOASSUNTO",gxz:"Z358MensagemUsuarioAssunto",gxold:"O358MensagemUsuarioAssunto",gxvar:"A358MensagemUsuarioAssunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A358MensagemUsuarioAssunto=Value},v2z:function(Value){gx.O.Z358MensagemUsuarioAssunto=Value},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIOASSUNTO",row || gx.fn.currentGridRowImpl(65),gx.O.A358MensagemUsuarioAssunto,0)},c2v:function(){gx.O.A358MensagemUsuarioAssunto=this.val()},val:function(row){return gx.fn.getGridControlValue("MENSAGEMUSUARIOASSUNTO",row || gx.fn.currentGridRowImpl(65))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:3,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPMSG",gxz:"ZV20bmpMsg",gxold:"OV20bmpMsg",gxvar:"AV20bmpMsg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20bmpMsg=Value},v2z:function(Value){gx.O.ZV20bmpMsg=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPMSG",row || gx.fn.currentGridRowImpl(65),gx.O.AV20bmpMsg,gx.O.AV41Bmpmsg_GXI)},c2v:function(){gx.O.AV41Bmpmsg_GXI=this.val_GXI();gx.O.AV20bmpMsg=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPMSG",row || gx.fn.currentGridRowImpl(65))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPMSG_GXI",row || gx.fn.currentGridRowImpl(65))}, gxvar_GXI:'AV41Bmpmsg_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:3,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLEE",gxz:"ZV29bmpLeE",gxold:"OV29bmpLeE",gxvar:"AV29bmpLeE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpLeE=Value},v2z:function(Value){gx.O.ZV29bmpLeE=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLEE",row || gx.fn.currentGridRowImpl(65),gx.O.AV29bmpLeE,gx.O.AV43Bmplee_GXI)},c2v:function(){gx.O.AV43Bmplee_GXI=this.val_GXI();gx.O.AV29bmpLeE=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLEE",row || gx.fn.currentGridRowImpl(65))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLEE_GXI",row || gx.fn.currentGridRowImpl(65))}, gxvar_GXI:'AV43Bmplee_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:3,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXE",gxz:"ZV25bmpExE",gxold:"OV25bmpExE",gxvar:"AV25bmpExE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25bmpExE=Value},v2z:function(Value){gx.O.ZV25bmpExE=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXE",row || gx.fn.currentGridRowImpl(65),gx.O.AV25bmpExE,gx.O.AV42Bmpexe_GXI)},c2v:function(){gx.O.AV42Bmpexe_GXI=this.val_GXI();gx.O.AV25bmpExE=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXE",row || gx.fn.currentGridRowImpl(65))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXE_GXI",row || gx.fn.currentGridRowImpl(65))}, gxvar_GXI:'AV42Bmpexe_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:3,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:65,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vMENSAGEMUSUARIOID",gxz:"ZV27MensagemUsuarioId",gxold:"OV27MensagemUsuarioId",gxvar:"AV27MensagemUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27MensagemUsuarioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27MensagemUsuarioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vMENSAGEMUSUARIOID",row || gx.fn.currentGridRowImpl(65),gx.O.AV27MensagemUsuarioId,0)},c2v:function(){gx.O.AV27MensagemUsuarioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vMENSAGEMUSUARIOID",row || gx.fn.currentGridRowImpl(65),'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:3,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:65,gxgrid:this.Grid1Container,fnc:this.Valid_Usuarioid,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z75UsuarioId",gxold:"O75UsuarioId",gxvar:"A75UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A75UsuarioId=Value},v2z:function(Value){gx.O.Z75UsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(65),gx.O.A75UsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A75UsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(65))},nac:gx.falseFn};
   GXValidFnc[75]={fld:"DIV4", format:2,grid:0};
   this.AV13UsuarioDeEnvioId = "" ;
   this.ZV13UsuarioDeEnvioId = "" ;
   this.OV13UsuarioDeEnvioId = "" ;
   this.AV14MensagemRecebidaLida = "" ;
   this.ZV14MensagemRecebidaLida = "" ;
   this.OV14MensagemRecebidaLida = "" ;
   this.AV15MensagemRecebidaNaoLida = "" ;
   this.ZV15MensagemRecebidaNaoLida = "" ;
   this.OV15MensagemRecebidaNaoLida = "" ;
   this.Z364UsuarioEnviouNome = "" ;
   this.O364UsuarioEnviouNome = "" ;
   this.Z356MensagemUsuarioData = gx.date.nullDate() ;
   this.O356MensagemUsuarioData = gx.date.nullDate() ;
   this.Z357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.O357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.Z358MensagemUsuarioAssunto = "" ;
   this.O358MensagemUsuarioAssunto = "" ;
   this.ZV26bmpLer = "" ;
   this.OV26bmpLer = "" ;
   this.ZV16bmpLid = "" ;
   this.OV16bmpLid = "" ;
   this.ZV17bmpRes = "" ;
   this.OV17bmpRes = "" ;
   this.ZV18bmpEnc = "" ;
   this.OV18bmpEnc = "" ;
   this.ZV5bmpExc = "" ;
   this.OV5bmpExc = "" ;
   this.Z365MensagemUsuarioId = 0 ;
   this.O365MensagemUsuarioId = 0 ;
   this.AV19UsuarioDeRecebidaId = "" ;
   this.ZV19UsuarioDeRecebidaId = "" ;
   this.OV19UsuarioDeRecebidaId = "" ;
   this.Z219UsuarioNome = "" ;
   this.O219UsuarioNome = "" ;
   this.ZV20bmpMsg = "" ;
   this.OV20bmpMsg = "" ;
   this.ZV29bmpLeE = "" ;
   this.OV29bmpLeE = "" ;
   this.ZV25bmpExE = "" ;
   this.OV25bmpExE = "" ;
   this.ZV27MensagemUsuarioId = 0 ;
   this.OV27MensagemUsuarioId = 0 ;
   this.Z75UsuarioId = "" ;
   this.O75UsuarioId = "" ;
   this.AV30Tab = [ ] ;
   this.AV13UsuarioDeEnvioId = "" ;
   this.AV14MensagemRecebidaLida = "" ;
   this.AV15MensagemRecebidaNaoLida = "" ;
   this.AV19UsuarioDeRecebidaId = "" ;
   this.A356MensagemUsuarioData = gx.date.nullDate() ;
   this.A357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.A358MensagemUsuarioAssunto = "" ;
   this.AV22UsuarioId = "" ;
   this.AV28SnPosiciona = "" ;
   this.A359MensagemUsuarioSnLida = "" ;
   this.A363UsuarioEnviouId = "" ;
   this.A361MensagemUsuarioExcluidaRecebid = "" ;
   this.A75UsuarioId = "" ;
   this.A364UsuarioEnviouNome = "" ;
   this.AV26bmpLer = "" ;
   this.AV16bmpLid = "" ;
   this.AV17bmpRes = "" ;
   this.AV18bmpEnc = "" ;
   this.AV5bmpExc = "" ;
   this.A365MensagemUsuarioId = 0 ;
   this.A362MensagemUsuarioExcluidaEnviada = "" ;
   this.A219UsuarioNome = "" ;
   this.AV20bmpMsg = "" ;
   this.AV29bmpLeE = "" ;
   this.AV25bmpExE = "" ;
   this.AV27MensagemUsuarioId = 0 ;
   this.Events = {"e112s2_client": ["'NOVAMENSAGEM'", true] ,"e162s2_client": ["'ENCAMINHAR'", true] ,"e172s2_client": ["'RESPONDER'", true] ,"e182s2_client": ["'LER'", true] ,"e122s2_client": ["'FECHAR'", true] ,"e132s2_client": ["ENTER", true] ,"e192s2_client": ["'EXCLUIRECEBIDA'", true] ,"e202s2_client": ["'MARCARLIDO'", true] ,"e222s2_client": ["'EXCLUIENVIADA'", true] ,"e232s2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'}],[{av:'AV18bmpEnc',fld:'vBMPENC'},{av:'gx.fn.getCtrlProperty("vBMPENC","Tooltiptext")',ctrl:'vBMPENC',prop:'Tooltiptext'},{av:'AV5bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLID","Tooltiptext")',ctrl:'vBMPLID',prop:'Tooltiptext'},{av:'AV16bmpLid',fld:'vBMPLID'},{av:'AV17bmpRes',fld:'vBMPRES'},{av:'gx.fn.getCtrlProperty("vBMPRES","Tooltiptext")',ctrl:'vBMPRES',prop:'Tooltiptext'},{av:'AV26bmpLer',fld:'vBMPLER'},{av:'gx.fn.getCtrlProperty("vBMPLER","Tooltiptext")',ctrl:'vBMPLER',prop:'Tooltiptext'}]];
   this.EvtParms["'NOVAMENSAGEM'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'}],[]];
   this.EvtParms["'ENCAMINHAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'}],[]];
   this.EvtParms["'RESPONDER'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'}],[]];
   this.EvtParms["'LER'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'}],[{av:'AV20bmpMsg',fld:'vBMPMSG'},{av:'gx.fn.getCtrlProperty("vBMPMSG","Tooltiptext")',ctrl:'vBMPMSG',prop:'Tooltiptext'},{av:'AV25bmpExE',fld:'vBMPEXE'},{av:'gx.fn.getCtrlProperty("vBMPEXE","Tooltiptext")',ctrl:'vBMPEXE',prop:'Tooltiptext'},{av:'AV27MensagemUsuarioId',fld:'vMENSAGEMUSUARIOID'},{av:'AV29bmpLeE',fld:'vBMPLEE'},{av:'gx.fn.getCtrlProperty("vBMPLEE","Tooltiptext")',ctrl:'vBMPLEE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLEE","Link")',ctrl:'vBMPLEE',prop:'Link'}]];
   this.EvtParms["'EXCLUIRECEBIDA'"] = [[{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'AV6UsrCod',fld:'vUSRCOD'}],[]];
   this.EvtParms["'MARCARLIDO'"] = [[{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'AV6UsrCod',fld:'vUSRCOD'}],[]];
   this.EvtParms["'EXCLUIENVIADA'"] = [[{av:'AV27MensagemUsuarioId',fld:'vMENSAGEMUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'}],[]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'}],[]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV13UsuarioDeEnvioId',fld:'vUSUARIODEENVIOID'},{av:'AV14MensagemRecebidaLida',fld:'vMENSAGEMRECEBIDALIDA'},{av:'AV15MensagemRecebidaNaoLida',fld:'vMENSAGEMRECEBIDANAOLIDA'},{av:'AV19UsuarioDeRecebidaId',fld:'vUSUARIODERECEBIDAID'},{av:'AV22UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'A359MensagemUsuarioSnLida',fld:'MENSAGEMUSUARIOSNLIDA'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'}],[]];
   this.EnterCtrl = ["BUTTON1" ,"BUTTON4"];
   this.setVCMap("AV22UsuarioId", "vUSUARIOID", 0, "char");
   this.setVCMap("A359MensagemUsuarioSnLida", "MENSAGEMUSUARIOSNLIDA", 0, "char");
   this.setVCMap("AV28SnPosiciona", "vSNPOSICIONA", 0, "svchar");
   this.setVCMap("AV22UsuarioId", "vUSUARIOID", 0, "char");
   this.setVCMap("A359MensagemUsuarioSnLida", "MENSAGEMUSUARIOSNLIDA", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar({rfrVar:"AV22UsuarioId"});
   GridContainer.addRefreshingVar({rfrVar:"A359MensagemUsuarioSnLida"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[20]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[22]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[55]);
   Grid1Container.addRefreshingVar({rfrVar:"AV22UsuarioId"});
   Grid1Container.addRefreshingVar({rfrVar:"A359MensagemUsuarioSnLida"});
   Grid1Container.addRefreshingVar({rfrVar:"A365MensagemUsuarioId", rfrProp:"Value", gxAttId:"365"});
   Grid1Container.addRefreshingVar({rfrVar:"A75UsuarioId", rfrProp:"Value", gxAttId:"75"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmensagem());
