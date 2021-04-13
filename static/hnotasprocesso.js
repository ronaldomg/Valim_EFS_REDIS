/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:2:33.7
*/
gx.evt.autoSkip = false;
gx.define('hnotasprocesso', false, function () {
   this.ServerClass =  "hnotasprocesso" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A1712ContaPagRecVlrAcrescimo=gx.fn.getDecimalValue("CONTAPAGRECVLRACRESCIMO",'.',',') ;
      this.A1713ContaPagRecVlrConta=gx.fn.getDecimalValue("CONTAPAGRECVLRCONTA",'.',',') ;
      this.A1714ContaPagRecVlrDesconto=gx.fn.getDecimalValue("CONTAPAGRECVLRDESCONTO",'.',',') ;
      this.A1715ContaPagRecVlrPagamento=gx.fn.getDecimalValue("CONTAPAGRECVLRPAGAMENTO",'.',',') ;
      this.A2115ContaPagRecVlrAtualSemSinal=gx.fn.getDecimalValue("CONTAPAGRECVLRATUALSEMSINAL",'.',',') ;
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV45Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Processoconvano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Processoconvnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagreccliforid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(66) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECCLIFORID", gx.fn.currentGridRowImpl(66));
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
   this.e11pe2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12pe2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e14pe2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13pe2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e19pe2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e20pe2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,20,22,24,26,29,31,34,36,37,40,42,45,48,51,53,55,57,60,62,63,67,68,69,70,71,72,73,74,75,76,77,78,79,80,83,84,87,89,91,93,95,97,101];
   this.GXLastCtrlId =101;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",66,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hnotasprocesso",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1686,67,"CONTAPAGRECNUMERO","","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],1686,"ContaPagRecNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1695,68,"CONTAPAGRECDOCUMENTO","","","ContaPagRecDocumento","svchar",0,"px",20,20,"left",null,[],1695,"ContaPagRecDocumento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1696,69,"CONTAPAGRECSEQDOCUME","","","ContaPagRecSeqDocume","char",0,"px",3,3,"left",null,[],1696,"ContaPagRecSeqDocume",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1637,70,"CONTAPAGRECCLIFORID","","","ContaPagRecCliForId","int",0,"px",7,7,"right",null,[],1637,"ContaPagRecCliForId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1638,71,"CONTAPAGRECCLIFORFANTASIA","","","ContaPagRecCliForFantasia","svchar",0,"px",60,60,"left",null,[],1638,"ContaPagRecCliForFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Dtemissao",72,"vDTEMISSAO","","","DtEmissao","char",0,"px",12,12,"left",null,[],"Dtemissao","DtEmissao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1699,73,"CONTAPAGRECDTEMISSAO","Emissão","","ContaPagRecDtEmissao","date",0,"px",10,10,"right",null,[],1699,"ContaPagRecDtEmissao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1700,74,"CONTAPAGRECDTPAGAMENTO","Pagamento","","ContaPagRecDtPagamento","date",0,"px",10,10,"right",null,[],1700,"ContaPagRecDtPagamento",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Data",75,"vDATA","","","Data","char",0,"px",12,12,"left",null,[],"Data","Data",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1701,76,"CONTAPAGRECDTVENCIMENTO","Vencimento","","ContaPagRecDtVencimento","date",0,"px",10,10,"right",null,[],1701,"ContaPagRecDtVencimento",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Dtvencimento",77,"vDTVENCIMENTO","","","DtVencimento","char",0,"px",12,12,"left",null,[],"Dtvencimento","DtVencimento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Contapagrecvlrconta",78,"vCONTAPAGRECVLRCONTA","","","ContaPagRecVlrConta","decimal",0,"px",22,22,"right",null,[],"Contapagrecvlrconta","ContaPagRecVlrConta",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Valor",79,"vVALOR","Valor Atual","","Valor","decimal",0,"px",18,18,"right",null,[],"Valor","Valor",true,2,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1692,80,"CONTAPAGRECSITUACAO","","ContaPagRecSituacao","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE10",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"ORDEREDTEXT", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE1",grid:0};
   GXValidFnc[17]={fld:"TABLE12",grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Processoconvano,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVANO",gxz:"ZV28ProcessoConvAno",gxold:"OV28ProcessoConvAno",gxvar:"AV28ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ProcessoConvAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVANO",gx.O.AV28ProcessoConvAno,0)},c2v:function(){gx.O.AV28ProcessoConvAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVANO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Processoconvnumero,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVNUMERO",gxz:"ZV27ProcessoConvNumero",gxold:"OV27ProcessoConvNumero",gxvar:"AV27ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ProcessoConvNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVNUMERO",gx.O.AV27ProcessoConvNumero,0)},c2v:function(){gx.O.AV27ProcessoConvNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLE11",grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVDATAVALIDADE",gxz:"ZV30ProcessoConvDataValidade",gxold:"OV30ProcessoConvDataValidade",gxvar:"AV30ProcessoConvDataValidade",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProcessoConvDataValidade=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30ProcessoConvDataValidade=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVDATAVALIDADE",gx.O.AV30ProcessoConvDataValidade,0)},c2v:function(){gx.O.AV30ProcessoConvDataValidade=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPROCESSOCONVDATAVALIDADE")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV31ConvenioId",gxold:"OV31ConvenioId",gxvar:"AV31ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV31ConvenioId,0)},c2v:function(){gx.O.AV31ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV32ConvenioDescricao",gxold:"OV32ConvenioDescricao",gxvar:"AV32ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV32ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV32ConvenioDescricao,0)},c2v:function(){gx.O.AV32ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVFINALIDADE",gxz:"ZV29ProcessoConvFinalidade",gxold:"OV29ProcessoConvFinalidade",gxvar:"AV29ProcessoConvFinalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ProcessoConvFinalidade=Value},v2z:function(Value){gx.O.ZV29ProcessoConvFinalidade=Value},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVFINALIDADE",gx.O.AV29ProcessoConvFinalidade,0)},c2v:function(){gx.O.AV29ProcessoConvFinalidade=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOCONVFINALIDADE")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE4",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[51]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[53]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[55]={fld:"BTNHELP",grid:0};
   GXValidFnc[57]={fld:"TABLE5",grid:0};
   GXValidFnc[60]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(66),gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDOCUMENTO",gxz:"Z1695ContaPagRecDocumento",gxold:"O1695ContaPagRecDocumento",gxvar:"A1695ContaPagRecDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1695ContaPagRecDocumento=Value},v2z:function(Value){gx.O.Z1695ContaPagRecDocumento=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDOCUMENTO",row || gx.fn.currentGridRowImpl(66),gx.O.A1695ContaPagRecDocumento,0)},c2v:function(){gx.O.A1695ContaPagRecDocumento=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECDOCUMENTO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECSEQDOCUME",gxz:"Z1696ContaPagRecSeqDocume",gxold:"O1696ContaPagRecSeqDocume",gxvar:"A1696ContaPagRecSeqDocume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1696ContaPagRecSeqDocume=Value},v2z:function(Value){gx.O.Z1696ContaPagRecSeqDocume=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECSEQDOCUME",row || gx.fn.currentGridRowImpl(66),gx.O.A1696ContaPagRecSeqDocume,0)},c2v:function(){gx.O.A1696ContaPagRecSeqDocume=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECSEQDOCUME",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:this.Valid_Contapagreccliforid,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORID",gxz:"Z1637ContaPagRecCliForId",gxold:"O1637ContaPagRecCliForId",gxvar:"A1637ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1637ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1637ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(66),gx.O.A1637ContaPagRecCliForId,0)},c2v:function(){gx.O.A1637ContaPagRecCliForId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORFANTASIA",gxz:"Z1638ContaPagRecCliForFantasia",gxold:"O1638ContaPagRecCliForFantasia",gxvar:"A1638ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1638ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.Z1638ContaPagRecCliForFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(66),gx.O.A1638ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.A1638ContaPagRecCliForFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"char",len:12,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDTEMISSAO",gxz:"ZV41DtEmissao",gxold:"OV41DtEmissao",gxvar:"AV41DtEmissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV41DtEmissao=Value},v2z:function(Value){gx.O.ZV41DtEmissao=Value},v2c:function(row){gx.fn.setGridControlValue("vDTEMISSAO",row || gx.fn.currentGridRowImpl(66),gx.O.AV41DtEmissao,0)},c2v:function(){gx.O.AV41DtEmissao=this.val()},val:function(row){return gx.fn.getGridControlValue("vDTEMISSAO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTEMISSAO",gxz:"Z1699ContaPagRecDtEmissao",gxold:"O1699ContaPagRecDtEmissao",gxvar:"A1699ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(66),gx.O.A1699ContaPagRecDtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTPAGAMENTO",gxz:"Z1700ContaPagRecDtPagamento",gxold:"O1700ContaPagRecDtPagamento",gxvar:"A1700ContaPagRecDtPagamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1700ContaPagRecDtPagamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1700ContaPagRecDtPagamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTPAGAMENTO",row || gx.fn.currentGridRowImpl(66),gx.O.A1700ContaPagRecDtPagamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1700ContaPagRecDtPagamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTPAGAMENTO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"char",len:12,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDATA",gxz:"ZV40Data",gxold:"OV40Data",gxvar:"AV40Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV40Data=Value},v2z:function(Value){gx.O.ZV40Data=Value},v2c:function(row){gx.fn.setGridControlValue("vDATA",row || gx.fn.currentGridRowImpl(66),gx.O.AV40Data,0)},c2v:function(){gx.O.AV40Data=this.val()},val:function(row){return gx.fn.getGridControlValue("vDATA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTVENCIMENTO",gxz:"Z1701ContaPagRecDtVencimento",gxold:"O1701ContaPagRecDtVencimento",gxvar:"A1701ContaPagRecDtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(66),gx.O.A1701ContaPagRecDtVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"char",len:12,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDTVENCIMENTO",gxz:"ZV42DtVencimento",gxold:"OV42DtVencimento",gxvar:"AV42DtVencimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV42DtVencimento=Value},v2z:function(Value){gx.O.ZV42DtVencimento=Value},v2c:function(row){gx.fn.setGridControlValue("vDTVENCIMENTO",row || gx.fn.currentGridRowImpl(66),gx.O.AV42DtVencimento,0)},c2v:function(){gx.O.AV42DtVencimento=this.val()},val:function(row){return gx.fn.getGridControlValue("vDTVENCIMENTO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVLRCONTA",gxz:"ZV38ContaPagRecVlrConta",gxold:"OV38ContaPagRecVlrConta",gxvar:"AV38ContaPagRecVlrConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV38ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV38ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vCONTAPAGRECVLRCONTA",row || gx.fn.currentGridRowImpl(66),gx.O.AV38ContaPagRecVlrConta,2,',')},c2v:function(){gx.O.AV38ContaPagRecVlrConta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vCONTAPAGRECVLRCONTA",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALOR",gxz:"ZV39Valor",gxold:"OV39Valor",gxvar:"AV39Valor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV39Valor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV39Valor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALOR",row || gx.fn.currentGridRowImpl(66),gx.O.AV39Valor,2,',')},c2v:function(){gx.O.AV39Valor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALOR",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECSITUACAO",gxz:"Z1692ContaPagRecSituacao",gxold:"O1692ContaPagRecSituacao",gxvar:"A1692ContaPagRecSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1692ContaPagRecSituacao=Value},v2z:function(Value){gx.O.Z1692ContaPagRecSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(66),gx.O.A1692ContaPagRecSituacao)},c2v:function(){gx.O.A1692ContaPagRecSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[83]={fld:"SECTION1",grid:0};
   GXValidFnc[84]={fld:"TABLE8",grid:0};
   GXValidFnc[87]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:6,dec:0,sign:true,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTNOTAS",gxz:"ZV34TotNotas",gxold:"OV34TotNotas",gxvar:"AV34TotNotas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TotNotas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34TotNotas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTOTNOTAS",gx.O.AV34TotNotas,0)},c2v:function(){gx.O.AV34TotNotas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTOTNOTAS",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"decimal",len:15,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOMAVLCONTAS",gxz:"ZV35SomaVlContas",gxold:"OV35SomaVlContas",gxvar:"AV35SomaVlContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35SomaVlContas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV35SomaVlContas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSOMAVLCONTAS",gx.O.AV35SomaVlContas,2,',')},c2v:function(){gx.O.AV35SomaVlContas=this.val()},val:function(){return gx.fn.getDecimalValue("vSOMAVLCONTAS",'.',',')},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"decimal",len:15,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOMAVLATUAL",gxz:"ZV36SomaVlAtual",gxold:"OV36SomaVlAtual",gxvar:"AV36SomaVlAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36SomaVlAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV36SomaVlAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSOMAVLATUAL",gx.O.AV36SomaVlAtual,2,',')},c2v:function(){gx.O.AV36SomaVlAtual=this.val()},val:function(){return gx.fn.getDecimalValue("vSOMAVLATUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28ProcessoConvAno = 0 ;
   this.ZV28ProcessoConvAno = 0 ;
   this.OV28ProcessoConvAno = 0 ;
   this.AV27ProcessoConvNumero = 0 ;
   this.ZV27ProcessoConvNumero = 0 ;
   this.OV27ProcessoConvNumero = 0 ;
   this.AV30ProcessoConvDataValidade = gx.date.nullDate() ;
   this.ZV30ProcessoConvDataValidade = gx.date.nullDate() ;
   this.OV30ProcessoConvDataValidade = gx.date.nullDate() ;
   this.AV31ConvenioId = 0 ;
   this.ZV31ConvenioId = 0 ;
   this.OV31ConvenioId = 0 ;
   this.AV32ConvenioDescricao = "" ;
   this.ZV32ConvenioDescricao = "" ;
   this.OV32ConvenioDescricao = "" ;
   this.AV29ProcessoConvFinalidade = "" ;
   this.ZV29ProcessoConvFinalidade = "" ;
   this.OV29ProcessoConvFinalidade = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.Z1695ContaPagRecDocumento = "" ;
   this.O1695ContaPagRecDocumento = "" ;
   this.Z1696ContaPagRecSeqDocume = "" ;
   this.O1696ContaPagRecSeqDocume = "" ;
   this.Z1637ContaPagRecCliForId = 0 ;
   this.O1637ContaPagRecCliForId = 0 ;
   this.Z1638ContaPagRecCliForFantasia = "" ;
   this.O1638ContaPagRecCliForFantasia = "" ;
   this.ZV41DtEmissao = "" ;
   this.OV41DtEmissao = "" ;
   this.Z1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.O1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.Z1700ContaPagRecDtPagamento = gx.date.nullDate() ;
   this.O1700ContaPagRecDtPagamento = gx.date.nullDate() ;
   this.ZV40Data = "" ;
   this.OV40Data = "" ;
   this.Z1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.O1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.ZV42DtVencimento = "" ;
   this.OV42DtVencimento = "" ;
   this.ZV38ContaPagRecVlrConta = 0 ;
   this.OV38ContaPagRecVlrConta = 0 ;
   this.ZV39Valor = 0 ;
   this.OV39Valor = 0 ;
   this.Z1692ContaPagRecSituacao = "" ;
   this.O1692ContaPagRecSituacao = "" ;
   this.AV34TotNotas = 0 ;
   this.ZV34TotNotas = 0 ;
   this.OV34TotNotas = 0 ;
   this.AV35SomaVlContas = 0 ;
   this.ZV35SomaVlContas = 0 ;
   this.OV35SomaVlContas = 0 ;
   this.AV36SomaVlAtual = 0 ;
   this.ZV36SomaVlAtual = 0 ;
   this.OV36SomaVlAtual = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28ProcessoConvAno = 0 ;
   this.AV27ProcessoConvNumero = 0 ;
   this.AV30ProcessoConvDataValidade = gx.date.nullDate() ;
   this.AV31ConvenioId = 0 ;
   this.AV32ConvenioDescricao = "" ;
   this.AV29ProcessoConvFinalidade = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV34TotNotas = 0 ;
   this.AV35SomaVlContas = 0 ;
   this.AV36SomaVlAtual = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1966ContaPagRecNoProcesso = 0 ;
   this.A2005ContaPagRecAnoProcesso = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1715ContaPagRecVlrPagamento = 0 ;
   this.A1714ContaPagRecVlrDesconto = 0 ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1712ContaPagRecVlrAcrescimo = 0 ;
   this.A2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1696ContaPagRecSeqDocume = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.AV41DtEmissao = "" ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1700ContaPagRecDtPagamento = gx.date.nullDate() ;
   this.AV40Data = "" ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.AV42DtVencimento = "" ;
   this.AV38ContaPagRecVlrConta = 0 ;
   this.AV39Valor = 0 ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.A3818ProcessoConvDataValidade = gx.date.nullDate() ;
   this.A3819ProcessoConvFinalidade = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.A1680ConvenioEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV45Pgmname = "" ;
   this.Events = {"e11pe2_client": ["'ANTERIOR'", true] ,"e12pe2_client": ["'PROXIMO'", true] ,"e14pe2_client": ["VPAGINA.CLICK", true] ,"e13pe2_client": ["'FECHAR'", true] ,"e19pe2_client": ["ENTER", true] ,"e20pe2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ProcessoConvAno',fld:'vPROCESSOCONVANO',hsh:true},{av:'AV27ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1700ContaPagRecDtPagamento',fld:'CONTAPAGRECDTPAGAMENTO'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'AV34TotNotas',fld:'vTOTNOTAS'},{av:'AV36SomaVlAtual',fld:'vSOMAVLATUAL'},{av:'AV35SomaVlContas',fld:'vSOMAVLCONTAS'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'}],[{av:'AV34TotNotas',fld:'vTOTNOTAS'},{av:'AV36SomaVlAtual',fld:'vSOMAVLATUAL'},{av:'AV35SomaVlContas',fld:'vSOMAVLCONTAS'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ProcessoConvAno',fld:'vPROCESSOCONVANO',hsh:true},{av:'AV27ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1700ContaPagRecDtPagamento',fld:'CONTAPAGRECDTPAGAMENTO'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'AV34TotNotas',fld:'vTOTNOTAS'},{av:'AV36SomaVlAtual',fld:'vSOMAVLATUAL'},{av:'AV35SomaVlContas',fld:'vSOMAVLCONTAS'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'}],[{ctrl:'CONTAPAGRECNUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECNUMERO","Title")',ctrl:'CONTAPAGRECNUMERO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CONTAPAGRECDOCUMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDOCUMENTO","Title")',ctrl:'CONTAPAGRECDOCUMENTO',prop:'Title'},{ctrl:'CONTAPAGRECSEQDOCUME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECSEQDOCUME","Title")',ctrl:'CONTAPAGRECSEQDOCUME',prop:'Title'},{ctrl:'vDTEMISSAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDTEMISSAO","Title")',ctrl:'vDTEMISSAO',prop:'Title'},{ctrl:'CONTAPAGRECCLIFORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECCLIFORID","Title")',ctrl:'CONTAPAGRECCLIFORID',prop:'Title'},{ctrl:'CONTAPAGRECCLIFORFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECCLIFORFANTASIA","Title")',ctrl:'CONTAPAGRECCLIFORFANTASIA',prop:'Title'},{ctrl:'vDATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDATA","Title")',ctrl:'vDATA',prop:'Title'},{ctrl:'vDTVENCIMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDTVENCIMENTO","Title")',ctrl:'vDTVENCIMENTO',prop:'Title'},{ctrl:'vCONTAPAGRECVLRCONTA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vCONTAPAGRECVLRCONTA","Title")',ctrl:'vCONTAPAGRECVLRCONTA',prop:'Title'},{ctrl:'CONTAPAGRECSITUACAO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ProcessoConvAno',fld:'vPROCESSOCONVANO',hsh:true},{av:'AV27ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1700ContaPagRecDtPagamento',fld:'CONTAPAGRECDTPAGAMENTO'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'AV34TotNotas',fld:'vTOTNOTAS'},{av:'AV36SomaVlAtual',fld:'vSOMAVLATUAL'},{av:'AV35SomaVlContas',fld:'vSOMAVLCONTAS'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ProcessoConvAno',fld:'vPROCESSOCONVANO',hsh:true},{av:'AV27ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1700ContaPagRecDtPagamento',fld:'CONTAPAGRECDTPAGAMENTO'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'AV34TotNotas',fld:'vTOTNOTAS'},{av:'AV36SomaVlAtual',fld:'vSOMAVLATUAL'},{av:'AV35SomaVlContas',fld:'vSOMAVLCONTAS'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ProcessoConvAno',fld:'vPROCESSOCONVANO',hsh:true},{av:'AV27ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1700ContaPagRecDtPagamento',fld:'CONTAPAGRECDTPAGAMENTO'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'AV34TotNotas',fld:'vTOTNOTAS'},{av:'AV36SomaVlAtual',fld:'vSOMAVLATUAL'},{av:'AV35SomaVlContas',fld:'vSOMAVLCONTAS'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV45Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1700ContaPagRecDtPagamento',fld:'CONTAPAGRECDTPAGAMENTO'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'AV34TotNotas',fld:'vTOTNOTAS'},{av:'AV36SomaVlAtual',fld:'vSOMAVLATUAL'},{av:'AV35SomaVlContas',fld:'vSOMAVLCONTAS'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'}],[{av:'AV40Data',fld:'vDATA'},{av:'AV39Valor',fld:'vVALOR'},{av:'AV38ContaPagRecVlrConta',fld:'vCONTAPAGRECVLRCONTA'},{av:'AV34TotNotas',fld:'vTOTNOTAS'},{av:'AV36SomaVlAtual',fld:'vSOMAVLATUAL'},{av:'AV35SomaVlContas',fld:'vSOMAVLCONTAS'},{av:'AV41DtEmissao',fld:'vDTEMISSAO'},{av:'AV42DtVencimento',fld:'vDTVENCIMENTO'}]];
   this.setVCMap("A1712ContaPagRecVlrAcrescimo", "CONTAPAGRECVLRACRESCIMO", 0, "decimal");
   this.setVCMap("A1713ContaPagRecVlrConta", "CONTAPAGRECVLRCONTA", 0, "decimal");
   this.setVCMap("A1714ContaPagRecVlrDesconto", "CONTAPAGRECVLRDESCONTO", 0, "decimal");
   this.setVCMap("A1715ContaPagRecVlrPagamento", "CONTAPAGRECVLRPAGAMENTO", 0, "decimal");
   this.setVCMap("A2115ContaPagRecVlrAtualSemSinal", "CONTAPAGRECVLRATUALSEMSINAL", 0, "decimal");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV45Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV45Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar({rfrVar:"AV45Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar({rfrVar:"A1700ContaPagRecDtPagamento", rfrProp:"Value", gxAttId:"1700"});
   GridContainer.addRefreshingVar({rfrVar:"A2115ContaPagRecVlrAtualSemSinal"});
   GridContainer.addRefreshingVar({rfrVar:"A1713ContaPagRecVlrConta"});
   GridContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridContainer.addRefreshingVar(this.GXValidFnc[97]);
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar({rfrVar:"A1699ContaPagRecDtEmissao", rfrProp:"Value", gxAttId:"1699"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hnotasprocesso());
