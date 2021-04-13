/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:9:33.62
*/
gx.evt.autoSkip = false;
gx.define('hnotaservico', false, function () {
   this.ServerClass =  "hnotaservico" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV30SdtNotaServico=gx.fn.getControlValue("vSDTNOTASERVICO") ;
      this.AV26NfseRegistraLote=gx.fn.getControlValue("vNFSEREGISTRALOTE") ;
      this.A9347NotaServicoOutrasInformacoes=gx.fn.getControlValue("NOTASERVICOOUTRASINFORMACOES") ;
      this.AV23inordemservicoid=gx.fn.getIntegerValue("vINORDEMSERVICOID",'.') ;
   };
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Notaservicoseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNOTASERVICOSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e132by2_client=function()
   {
      this.executeServerEvent("VPESSOAID.ISVALID", true, null, false, true);
   };
   this.e112by2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122by2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e142by2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e202by2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e152by2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e212by2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e222by2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e162by2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e172by2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e242by2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e252by2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.e262by1_client=function()
   {
      this.executeServerEvent("PROMPT_PESSOAID_PESSOAID.GXPROMPT", true, null, false, true);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,19,22,25,28,30,32,35,37,40,42,46,47,48,49,50,51,52,53,54,55,62,65,66,67,68,69];
   this.GXLastCtrlId =69;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",45,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hnotaservico",[],false,1,true,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(9368,46,"NOTASERVICOOSID","OS ID","","NotaServicoOSId","int",0,"px",9,9,"right",null,[],9368,"NotaServicoOSId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9348,47,"NOTASERVICOSEQ","Sequencia da Nota","","NotaServicoSeq","int",0,"px",9,9,"right",null,[],9348,"NotaServicoSeq",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11125,48,"NOTASERVICOTOMADOR","Tomador","","NotaServicoTomador","char",0,"px",18,18,"left",null,[],11125,"NotaServicoTomador",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11124,49,"NOTASERVICOPRESTADOR","Prestador","","NotaServicoPrestador","char",0,"px",18,18,"left",null,[],11124,"NotaServicoPrestador",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9315,50,"NOTASERVICODTEMISSAO","Dt. Emissão","","NotaServicoDtEmissao","date",0,"px",10,10,"right",null,[],9315,"NotaServicoDtEmissao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9323,51,"NOTASERVICOVLRSERVICO","Valor total da Nota","","NotaServicoVlrServico","decimal",0,"px",15,15,"right",null,[],9323,"NotaServicoVlrServico",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Descricao",52,"vDESCRICAO","Descricao","","Descricao","char",0,"px",50,50,"left",null,[],"Descricao","Descricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",53,0,"px",17,"px","e202by2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",54,0,"px",17,"px","e212by2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",55,0,"px",17,"px","e222by2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLEBUSCA",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICOID",gxz:"ZV14ordemservicoid",gxold:"OV14ordemservicoid",gxvar:"AV14ordemservicoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ordemservicoid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14ordemservicoid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOID",gx.O.AV14ordemservicoid,0)},c2v:function(){gx.O.AV14ordemservicoid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:'e132by2_client',rgrid:[],fld:"vPESSOAID",gxz:"ZV15Pessoaid",gxold:"OV15Pessoaid",gxvar:"AV15Pessoaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Pessoaid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15Pessoaid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV15Pessoaid,0)},c2v:function(){gx.O.AV15Pessoaid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV19PessoaFantasia",gxold:"OV19PessoaFantasia",gxvar:"AV19PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PessoaFantasia=Value},v2z:function(Value){gx.O.ZV19PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV19PessoaFantasia,0)},c2v:function(){gx.O.AV19PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TABLE4",grid:0};
   GXValidFnc[25]={fld:"TABLE8",grid:0};
   GXValidFnc[28]={fld:"IMAGE2",grid:0};
   GXValidFnc[30]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[32]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV7Pagina",gxold:"OV7Pagina",gxvar:"AV7Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV7Pagina)},c2v:function(){gx.O.AV7Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOOSID",gxz:"Z9368NotaServicoOSId",gxold:"O9368NotaServicoOSId",gxvar:"A9368NotaServicoOSId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9368NotaServicoOSId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9368NotaServicoOSId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NOTASERVICOOSID",row || gx.fn.currentGridRowImpl(45),gx.O.A9368NotaServicoOSId,0)},c2v:function(){gx.O.A9368NotaServicoOSId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NOTASERVICOOSID",row || gx.fn.currentGridRowImpl(45),'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOSEQ",gxz:"Z9348NotaServicoSeq",gxold:"O9348NotaServicoSeq",gxvar:"A9348NotaServicoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9348NotaServicoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9348NotaServicoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NOTASERVICOSEQ",row || gx.fn.currentGridRowImpl(45),gx.O.A9348NotaServicoSeq,0)},c2v:function(){gx.O.A9348NotaServicoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NOTASERVICOSEQ",row || gx.fn.currentGridRowImpl(45),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOTOMADOR",gxz:"Z11125NotaServicoTomador",gxold:"O11125NotaServicoTomador",gxvar:"A11125NotaServicoTomador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11125NotaServicoTomador=Value},v2z:function(Value){gx.O.Z11125NotaServicoTomador=Value},v2c:function(row){gx.fn.setGridControlValue("NOTASERVICOTOMADOR",row || gx.fn.currentGridRowImpl(45),gx.O.A11125NotaServicoTomador,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11125NotaServicoTomador=this.val()},val:function(row){return gx.fn.getGridControlValue("NOTASERVICOTOMADOR",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPRESTADOR",gxz:"Z11124NotaServicoPrestador",gxold:"O11124NotaServicoPrestador",gxvar:"A11124NotaServicoPrestador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11124NotaServicoPrestador=Value},v2z:function(Value){gx.O.Z11124NotaServicoPrestador=Value},v2c:function(row){gx.fn.setGridControlValue("NOTASERVICOPRESTADOR",row || gx.fn.currentGridRowImpl(45),gx.O.A11124NotaServicoPrestador,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11124NotaServicoPrestador=this.val()},val:function(row){return gx.fn.getGridControlValue("NOTASERVICOPRESTADOR",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICODTEMISSAO",gxz:"Z9315NotaServicoDtEmissao",gxold:"O9315NotaServicoDtEmissao",gxvar:"A9315NotaServicoDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9315NotaServicoDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9315NotaServicoDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("NOTASERVICODTEMISSAO",row || gx.fn.currentGridRowImpl(45),gx.O.A9315NotaServicoDtEmissao,0)},c2v:function(){gx.O.A9315NotaServicoDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("NOTASERVICODTEMISSAO",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOVLRSERVICO",gxz:"Z9323NotaServicoVlrServico",gxold:"O9323NotaServicoVlrServico",gxvar:"A9323NotaServicoVlrServico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9323NotaServicoVlrServico=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9323NotaServicoVlrServico=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("NOTASERVICOVLRSERVICO",row || gx.fn.currentGridRowImpl(45),gx.O.A9323NotaServicoVlrServico,2,',')},c2v:function(){gx.O.A9323NotaServicoVlrServico=this.val()},val:function(row){return gx.fn.getGridDecimalValue("NOTASERVICOVLRSERVICO",row || gx.fn.currentGridRowImpl(45),'.',',')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:50,dec:0,sign:false,ro:0,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV12Descricao",gxold:"OV12Descricao",gxvar:"AV12Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV12Descricao=Value},v2z:function(Value){gx.O.ZV12Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(45),gx.O.AV12Descricao,0)},c2v:function(){gx.O.AV12Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV11bmpAlt",gxold:"OV11bmpAlt",gxvar:"AV11bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV11bmpAlt=Value},v2z:function(Value){gx.O.ZV11bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(45),gx.O.AV11bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV11bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(45))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(45))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV10bmpExc",gxold:"OV10bmpExc",gxvar:"AV10bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV10bmpExc=Value},v2z:function(Value){gx.O.ZV10bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(45),gx.O.AV10bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV10bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(45))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(45))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV9bmpCon",gxold:"OV9bmpCon",gxvar:"AV9bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV9bmpCon=Value},v2z:function(Value){gx.O.ZV9bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(45),gx.O.AV9bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV9bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(45))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(45))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLEVARS",grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOACNPJ",gxz:"ZV17pessoacnpj",gxold:"OV17pessoacnpj",gxvar:"AV17pessoacnpj",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17pessoacnpj=Value},v2z:function(Value){gx.O.ZV17pessoacnpj=Value},v2c:function(){gx.fn.setControlValue("vPESSOACNPJ",gx.O.AV17pessoacnpj,0)},c2v:function(){gx.O.AV17pessoacnpj=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACNPJ")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Notaservicoseq,isvalid:null,rgrid:[],fld:"vNOTASERVICOSEQ",gxz:"ZV29NotaServicoSeq",gxold:"OV29NotaServicoSeq",gxvar:"AV29NotaServicoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29NotaServicoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29NotaServicoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOTASERVICOSEQ",gx.O.AV29NotaServicoSeq,0)},c2v:function(){gx.O.AV29NotaServicoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOTASERVICOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROC",gxz:"ZV27Proc",gxold:"OV27Proc",gxvar:"AV27Proc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Proc=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Proc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROC",gx.O.AV27Proc,0)},c2v:function(){gx.O.AV27Proc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROC",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV8PaginaAux",gxold:"OV8PaginaAux",gxvar:"AV8PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV8PaginaAux,0)},c2v:function(){gx.O.AV8PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"PROMPT_PESSOAID_PESSOAID",grid:0};
   this.AV14ordemservicoid = 0 ;
   this.ZV14ordemservicoid = 0 ;
   this.OV14ordemservicoid = 0 ;
   this.AV15Pessoaid = 0 ;
   this.ZV15Pessoaid = 0 ;
   this.OV15Pessoaid = 0 ;
   this.AV19PessoaFantasia = "" ;
   this.ZV19PessoaFantasia = "" ;
   this.OV19PessoaFantasia = "" ;
   this.AV7Pagina = 0 ;
   this.ZV7Pagina = 0 ;
   this.OV7Pagina = 0 ;
   this.Z9368NotaServicoOSId = 0 ;
   this.O9368NotaServicoOSId = 0 ;
   this.Z9348NotaServicoSeq = 0 ;
   this.O9348NotaServicoSeq = 0 ;
   this.Z11125NotaServicoTomador = "" ;
   this.O11125NotaServicoTomador = "" ;
   this.Z11124NotaServicoPrestador = "" ;
   this.O11124NotaServicoPrestador = "" ;
   this.Z9315NotaServicoDtEmissao = gx.date.nullDate() ;
   this.O9315NotaServicoDtEmissao = gx.date.nullDate() ;
   this.Z9323NotaServicoVlrServico = 0 ;
   this.O9323NotaServicoVlrServico = 0 ;
   this.ZV12Descricao = "" ;
   this.OV12Descricao = "" ;
   this.ZV11bmpAlt = "" ;
   this.OV11bmpAlt = "" ;
   this.ZV10bmpExc = "" ;
   this.OV10bmpExc = "" ;
   this.ZV9bmpCon = "" ;
   this.OV9bmpCon = "" ;
   this.AV17pessoacnpj = "" ;
   this.ZV17pessoacnpj = "" ;
   this.OV17pessoacnpj = "" ;
   this.AV29NotaServicoSeq = 0 ;
   this.ZV29NotaServicoSeq = 0 ;
   this.OV29NotaServicoSeq = 0 ;
   this.AV27Proc = 0 ;
   this.ZV27Proc = 0 ;
   this.OV27Proc = 0 ;
   this.AV8PaginaAux = 0 ;
   this.ZV8PaginaAux = 0 ;
   this.OV8PaginaAux = 0 ;
   this.AV14ordemservicoid = 0 ;
   this.AV15Pessoaid = 0 ;
   this.AV19PessoaFantasia = "" ;
   this.AV7Pagina = 0 ;
   this.AV17pessoacnpj = "" ;
   this.AV29NotaServicoSeq = 0 ;
   this.AV27Proc = 0 ;
   this.AV8PaginaAux = 0 ;
   this.AV23inordemservicoid = 0 ;
   this.A9347NotaServicoOutrasInformacoes = "" ;
   this.A9369NotaServicoOSEmpId = "" ;
   this.A9368NotaServicoOSId = 0 ;
   this.A9348NotaServicoSeq = 0 ;
   this.A11125NotaServicoTomador = "" ;
   this.A11124NotaServicoPrestador = "" ;
   this.A9315NotaServicoDtEmissao = gx.date.nullDate() ;
   this.A9323NotaServicoVlrServico = 0 ;
   this.AV12Descricao = "" ;
   this.AV11bmpAlt = "" ;
   this.AV10bmpExc = "" ;
   this.AV9bmpCon = "" ;
   this.A11121NfseNotaServicoSeq = 0 ;
   this.A9746NfseCodigoVerificacao = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.AV30SdtNotaServico = {} ;
   this.AV26NfseRegistraLote = {} ;
   this.Events = {"e132by2_client": ["VPESSOAID.ISVALID", true] ,"e112by2_client": ["'ANTERIOR'", true] ,"e122by2_client": ["'PROXIMO'", true] ,"e142by2_client": ["VPAGINA.CLICK", true] ,"e202by2_client": ["'ALTERAR'", true] ,"e152by2_client": ["'NOVO'", true] ,"e212by2_client": ["'EXCLUIR'", true] ,"e222by2_client": ["'CONSULTAR'", true] ,"e162by2_client": ["'FECHAR'", true] ,"e172by2_client": ["'PROCURAR'", true] ,"e242by2_client": ["ENTER", true] ,"e252by2_client": ["CANCEL", true] ,"e262by1_client": ["PROMPT_PESSOAID_PESSOAID.GXPROMPT", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14ordemservicoid',fld:'vORDEMSERVICOID'},{av:'AV17pessoacnpj',fld:'vPESSOACNPJ'},{av:'AV11bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV10bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV9bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A9347NotaServicoOutrasInformacoes',fld:'NOTASERVICOOUTRASINFORMACOES'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV27Proc',fld:'vPROC'},{av:'AV29NotaServicoSeq',fld:'vNOTASERVICOSEQ'},{av:'AV30SdtNotaServico',fld:'vSDTNOTASERVICO'},{av:'AV26NfseRegistraLote',fld:'vNFSEREGISTRALOTE'}],[{av:'AV25i',fld:'vI'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV30SdtNotaServico',fld:'vSDTNOTASERVICO'},{av:'AV26NfseRegistraLote',fld:'vNFSEREGISTRALOTE'}]];
   this.EvtParms["VPESSOAID.ISVALID"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV15Pessoaid',fld:'vPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV24empresaid',fld:'vEMPRESAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'}],[{av:'AV19PessoaFantasia',fld:'vPESSOAFANTASIA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A9347NotaServicoOutrasInformacoes',fld:'NOTASERVICOOUTRASINFORMACOES'},{av:'AV7Pagina',fld:'vPAGINA'}],[{av:'AV12Descricao',fld:'vDESCRICAO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV7Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14ordemservicoid',fld:'vORDEMSERVICOID'},{av:'AV17pessoacnpj',fld:'vPESSOACNPJ'},{av:'AV11bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV10bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV9bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27Proc',fld:'vPROC'},{av:'AV29NotaServicoSeq',fld:'vNOTASERVICOSEQ'},{av:'AV30SdtNotaServico',fld:'vSDTNOTASERVICO'},{av:'AV26NfseRegistraLote',fld:'vNFSEREGISTRALOTE'},{av:'A9347NotaServicoOutrasInformacoes',fld:'NOTASERVICOOUTRASINFORMACOES'},{av:'AV7Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14ordemservicoid',fld:'vORDEMSERVICOID'},{av:'AV17pessoacnpj',fld:'vPESSOACNPJ'},{av:'AV11bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV10bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV9bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27Proc',fld:'vPROC'},{av:'AV29NotaServicoSeq',fld:'vNOTASERVICOSEQ'},{av:'AV30SdtNotaServico',fld:'vSDTNOTASERVICO'},{av:'AV26NfseRegistraLote',fld:'vNFSEREGISTRALOTE'},{av:'A9347NotaServicoOutrasInformacoes',fld:'NOTASERVICOOUTRASINFORMACOES'},{av:'AV7Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14ordemservicoid',fld:'vORDEMSERVICOID'},{av:'AV17pessoacnpj',fld:'vPESSOACNPJ'},{av:'AV11bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV10bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV9bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27Proc',fld:'vPROC'},{av:'AV29NotaServicoSeq',fld:'vNOTASERVICOSEQ'},{av:'AV30SdtNotaServico',fld:'vSDTNOTASERVICO'},{av:'AV26NfseRegistraLote',fld:'vNFSEREGISTRALOTE'},{av:'A9347NotaServicoOutrasInformacoes',fld:'NOTASERVICOOUTRASINFORMACOES'},{av:'AV7Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV31IsDigitada',fld:'vISDIGITADA'},{av:'A9348NotaServicoSeq',fld:'NOTASERVICOSEQ'},{av:'A9368NotaServicoOSId',fld:'NOTASERVICOOSID'},{av:'A9369NotaServicoOSEmpId',fld:'NOTASERVICOOSEMPID'},{av:'A11121NfseNotaServicoSeq',fld:'NFSENOTASERVICOSEQ'},{av:'A9746NfseCodigoVerificacao',fld:'NFSECODIGOVERIFICACAO'}],[{av:'A9369NotaServicoOSEmpId',fld:'NOTASERVICOOSEMPID'},{av:'A9368NotaServicoOSId',fld:'NOTASERVICOOSID'},{av:'A9348NotaServicoSeq',fld:'NOTASERVICOSEQ'},{av:'AV29NotaServicoSeq',fld:'vNOTASERVICOSEQ'},{av:'AV31IsDigitada',fld:'vISDIGITADA'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV23inordemservicoid',fld:'vINORDEMSERVICOID'},{av:'AV24empresaid',fld:'vEMPRESAID'}],[{av:'AV24empresaid',fld:'vEMPRESAID'},{av:'AV23inordemservicoid',fld:'vINORDEMSERVICOID'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV31IsDigitada',fld:'vISDIGITADA'},{av:'A9348NotaServicoSeq',fld:'NOTASERVICOSEQ'},{av:'A9368NotaServicoOSId',fld:'NOTASERVICOOSID'},{av:'A11121NfseNotaServicoSeq',fld:'NFSENOTASERVICOSEQ'},{av:'A9746NfseCodigoVerificacao',fld:'NFSECODIGOVERIFICACAO'}],[{av:'AV27Proc',fld:'vPROC'},{av:'AV29NotaServicoSeq',fld:'vNOTASERVICOSEQ'},{av:'AV31IsDigitada',fld:'vISDIGITADA'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A9348NotaServicoSeq',fld:'NOTASERVICOSEQ'},{av:'A9368NotaServicoOSId',fld:'NOTASERVICOOSID'},{av:'A9369NotaServicoOSEmpId',fld:'NOTASERVICOOSEMPID'}],[{av:'A9369NotaServicoOSEmpId',fld:'NOTASERVICOOSEMPID'},{av:'A9368NotaServicoOSId',fld:'NOTASERVICOOSID'},{av:'A9348NotaServicoSeq',fld:'NOTASERVICOSEQ'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[],[]];
   this.setPrompt("PROMPT_PESSOAID_PESSOAID", [18,18]);
   this.setVCMap("AV30SdtNotaServico", "vSDTNOTASERVICO", 0, "SdtNotaServico");
   this.setVCMap("AV26NfseRegistraLote", "vNFSEREGISTRALOTE", 0, "NfseRegistraLote");
   this.setVCMap("A9347NotaServicoOutrasInformacoes", "NOTASERVICOOUTRASINFORMACOES", 0, "svchar");
   this.setVCMap("AV23inordemservicoid", "vINORDEMSERVICOID", 0, "int");
   this.setVCMap("AV30SdtNotaServico", "vSDTNOTASERVICO", 0, "SdtNotaServico");
   this.setVCMap("AV26NfseRegistraLote", "vNFSEREGISTRALOTE", 0, "NfseRegistraLote");
   this.setVCMap("A9347NotaServicoOutrasInformacoes", "NOTASERVICOOUTRASINFORMACOES", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridContainer.addRefreshingVar({rfrVar:"AV11bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV11bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV10bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV10bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV9bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV9bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"AV30SdtNotaServico"});
   GridContainer.addRefreshingVar({rfrVar:"AV26NfseRegistraLote"});
   GridContainer.addRefreshingVar({rfrVar:"A9347NotaServicoOutrasInformacoes"});
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hnotaservico());
