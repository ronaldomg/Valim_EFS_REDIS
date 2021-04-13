/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:1:29.6
*/
gx.evt.autoSkip = false;
gx.define('hparcelascontrato', false, function () {
   this.ServerClass =  "hparcelascontrato" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A1712ContaPagRecVlrAcrescimo=gx.fn.getDecimalValue("CONTAPAGRECVLRACRESCIMO",'.',',') ;
      this.A1714ContaPagRecVlrDesconto=gx.fn.getDecimalValue("CONTAPAGRECVLRDESCONTO",'.',',') ;
      this.A1715ContaPagRecVlrPagamento=gx.fn.getDecimalValue("CONTAPAGRECVLRPAGAMENTO",'.',',') ;
      this.AV29ContratoEmpresaId=gx.fn.getControlValue("vCONTRATOEMPRESAID") ;
      this.AV38SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV36EmpresaContaPagRec=gx.fn.getControlValue("vEMPRESACONTAPAGREC") ;
   };
   this.Valid_Contapagrecnumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(49) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECNUMERO", gx.fn.currentGridRowImpl(49));
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
   this.Valid_Contapagrecvlrconta=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(49) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECVLRCONTA", gx.fn.currentGridRowImpl(49));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagrecempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(49) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECEMPRESAID", gx.fn.currentGridRowImpl(49));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e22wc2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hboxcontaobservacao",[this.AV36EmpresaContaPagRec, this.A1686ContaPagRecNumero, "R"]), []);
      this.refreshOutputs([]);
   };
   this.e11wc2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12wc2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e15wc2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13wc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14wc2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e19wc2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e20wc2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21wc2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23wc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e24wc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,25,28,31,34,36,38,40,43,45,46,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,73];
   this.GXLastCtrlId =73;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",49,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hparcelascontrato",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1716,50,"CONTAPAGRECNOPARCELA","","","ContaPagRecNoParcela","int",0,"px",3,3,"right",null,[],1716,"ContaPagRecNoParcela",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1686,51,"CONTAPAGRECNUMERO","","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],1686,"ContaPagRecNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1701,52,"CONTAPAGRECDTVENCIMENTO","","","ContaPagRecDtVencimento","date",0,"px",10,10,"right",null,[],1701,"ContaPagRecDtVencimento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1713,53,"CONTAPAGRECVLRCONTA","","","ContaPagRecVlrConta","decimal",0,"px",22,22,"right",null,[],1713,"ContaPagRecVlrConta",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2115,54,"CONTAPAGRECVLRATUALSEMSINAL","Valor Atual","","ContaPagRecVlrAtualSemSinal","decimal",0,"px",22,22,"right",null,[],2115,"ContaPagRecVlrAtualSemSinal",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Stconta",55,"vSTCONTA","Situação","","StConta","svchar",0,"px",10,10,"left",null,[],"Stconta","StConta",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsnimpobs","vBMPSNIMPOBS",56,0,"px",17,"px","e22wc2_client","","Obs","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsnimpvenc","vBMPSNIMPVENC",57,0,"px",17,"px",null,"","Venc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpobs","vBMPOBS",58,0,"px",17,"px","e22wc2_client","","Obs","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",59,0,"px",17,"px","e20wc2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",60,0,"px",17,"px","e19wc2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5288,61,"CONTRATOEMPRESAID","Empresa Contrato","","ContratoEmpresaId","char",0,"px",10,10,"left",null,[],5288,"ContratoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5289,62,"CONTRATONUMERO","Número Contrato","","ContratoNumero","int",0,"px",8,8,"right",null,[],5289,"ContratoNumero",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1685,63,"CONTAPAGRECEMPRESAID","Empresa","","ContaPagRecEmpresaId","char",0,"px",10,10,"left",null,[],1685,"ContaPagRecEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5559,64,"PARCELASCONTRATOSNIMPOBS","Imprime Obs","","ParcelasContratoSnImpObs","char",0,"px",1,1,"left",null,[],5559,"ParcelasContratoSnImpObs",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5558,65,"PARCELASCONTRATOSNIMPVENC","Imp Vencmto","","ParcelasContratoSnImpVenc","char",0,"px",1,1,"left",null,[],5558,"ParcelasContratoSnImpVenc",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1692,66,"CONTAPAGRECSITUACAO","Situação do ContaPagRec","ContaPagRecSituacao","char",null,0,false,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONTRATONUMERO",gxz:"ZV30ContratoNumero",gxold:"OV30ContratoNumero",gxvar:"AV30ContratoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ContratoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ContratoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTRATONUMERO",gx.O.AV30ContratoNumero,0)},c2v:function(){gx.O.AV30ContratoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTRATONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE9",grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTRATOCLIENTEID",gxz:"ZV31ContratoClienteId",gxold:"OV31ContratoClienteId",gxvar:"AV31ContratoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ContratoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ContratoClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTRATOCLIENTEID",gx.O.AV31ContratoClienteId,0)},c2v:function(){gx.O.AV31ContratoClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTRATOCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTRATOCLIENTEFANTASIA",gxz:"ZV32ContratoClienteFantasia",gxold:"OV32ContratoClienteFantasia",gxvar:"AV32ContratoClienteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ContratoClienteFantasia=Value},v2z:function(Value){gx.O.ZV32ContratoClienteFantasia=Value},v2c:function(){gx.fn.setControlValue("vCONTRATOCLIENTEFANTASIA",gx.O.AV32ContratoClienteFantasia,0)},c2v:function(){gx.O.AV32ContratoClienteFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCONTRATOCLIENTEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE3",grid:0};
   GXValidFnc[34]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[36]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[38]={fld:"BTNHELP",grid:0};
   GXValidFnc[40]={fld:"TABLE5",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECNOPARCELA",gxz:"Z1716ContaPagRecNoParcela",gxold:"O1716ContaPagRecNoParcela",gxvar:"A1716ContaPagRecNoParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1716ContaPagRecNoParcela=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1716ContaPagRecNoParcela=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECNOPARCELA",row || gx.fn.currentGridRowImpl(49),gx.O.A1716ContaPagRecNoParcela,0)},c2v:function(){gx.O.A1716ContaPagRecNoParcela=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECNOPARCELA",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:this.Valid_Contapagrecnumero,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(49),gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTVENCIMENTO",gxz:"Z1701ContaPagRecDtVencimento",gxold:"O1701ContaPagRecDtVencimento",gxvar:"A1701ContaPagRecDtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(49),gx.O.A1701ContaPagRecDtVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:this.Valid_Contapagrecvlrconta,isvalid:null,rgrid:[],fld:"CONTAPAGRECVLRCONTA",gxz:"Z1713ContaPagRecVlrConta",gxold:"O1713ContaPagRecVlrConta",gxvar:"A1713ContaPagRecVlrConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1713ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1713ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CONTAPAGRECVLRCONTA",row || gx.fn.currentGridRowImpl(49),gx.O.A1713ContaPagRecVlrConta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1713ContaPagRecVlrConta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CONTAPAGRECVLRCONTA",row || gx.fn.currentGridRowImpl(49),'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECVLRATUALSEMSINAL",gxz:"Z2115ContaPagRecVlrAtualSemSinal",gxold:"O2115ContaPagRecVlrAtualSemSinal",gxvar:"A2115ContaPagRecVlrAtualSemSinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2115ContaPagRecVlrAtualSemSinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2115ContaPagRecVlrAtualSemSinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CONTAPAGRECVLRATUALSEMSINAL",row || gx.fn.currentGridRowImpl(49),gx.O.A2115ContaPagRecVlrAtualSemSinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2115ContaPagRecVlrAtualSemSinal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CONTAPAGRECVLRATUALSEMSINAL",row || gx.fn.currentGridRowImpl(49),'.',',')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:0,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSTCONTA",gxz:"ZV33StConta",gxold:"OV33StConta",gxvar:"AV33StConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV33StConta=Value},v2z:function(Value){gx.O.ZV33StConta=Value},v2c:function(row){gx.fn.setGridControlValue("vSTCONTA",row || gx.fn.currentGridRowImpl(49),gx.O.AV33StConta,0)},c2v:function(){gx.O.AV33StConta=this.val()},val:function(row){return gx.fn.getGridControlValue("vSTCONTA",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNIMPOBS",gxz:"ZV35BmpSnImpObs",gxold:"OV35BmpSnImpObs",gxvar:"AV35BmpSnImpObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35BmpSnImpObs=Value},v2z:function(Value){gx.O.ZV35BmpSnImpObs=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNIMPOBS",row || gx.fn.currentGridRowImpl(49),gx.O.AV35BmpSnImpObs,gx.O.AV47Bmpsnimpobs_GXI)},c2v:function(){gx.O.AV47Bmpsnimpobs_GXI=this.val_GXI();gx.O.AV35BmpSnImpObs=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNIMPOBS",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNIMPOBS_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV47Bmpsnimpobs_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNIMPVENC",gxz:"ZV34BmpSnImpVenc",gxold:"OV34BmpSnImpVenc",gxvar:"AV34BmpSnImpVenc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34BmpSnImpVenc=Value},v2z:function(Value){gx.O.ZV34BmpSnImpVenc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNIMPVENC",row || gx.fn.currentGridRowImpl(49),gx.O.AV34BmpSnImpVenc,gx.O.AV46Bmpsnimpvenc_GXI)},c2v:function(){gx.O.AV46Bmpsnimpvenc_GXI=this.val_GXI();gx.O.AV34BmpSnImpVenc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNIMPVENC",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNIMPVENC_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV46Bmpsnimpvenc_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOBS",gxz:"ZV37bmpObs",gxold:"OV37bmpObs",gxvar:"AV37bmpObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV37bmpObs=Value},v2z:function(Value){gx.O.ZV37bmpObs=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOBS",row || gx.fn.currentGridRowImpl(49),gx.O.AV37bmpObs,gx.O.AV45Bmpobs_GXI)},c2v:function(){gx.O.AV45Bmpobs_GXI=this.val_GXI();gx.O.AV37bmpObs=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOBS",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOBS_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV45Bmpobs_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(49),gx.O.AV7bmpAlt,gx.O.AV44Bmpalt_GXI)},c2v:function(){gx.O.AV44Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV44Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(49),gx.O.AV16bmpCon,gx.O.AV43Bmpcon_GXI)},c2v:function(){gx.O.AV43Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV43Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOEMPRESAID",gxz:"Z5288ContratoEmpresaId",gxold:"O5288ContratoEmpresaId",gxvar:"A5288ContratoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5288ContratoEmpresaId=Value},v2z:function(Value){gx.O.Z5288ContratoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(49),gx.O.A5288ContratoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5288ContratoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATONUMERO",gxz:"Z5289ContratoNumero",gxold:"O5289ContratoNumero",gxvar:"A5289ContratoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5289ContratoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5289ContratoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTRATONUMERO",row || gx.fn.currentGridRowImpl(49),gx.O.A5289ContratoNumero,0)},c2v:function(){gx.O.A5289ContratoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTRATONUMERO",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:this.Valid_Contapagrecempresaid,isvalid:null,rgrid:[],fld:"CONTAPAGRECEMPRESAID",gxz:"Z1685ContaPagRecEmpresaId",gxold:"O1685ContaPagRecEmpresaId",gxvar:"A1685ContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1685ContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1685ContaPagRecEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(49),gx.O.A1685ContaPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1685ContaPagRecEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARCELASCONTRATOSNIMPOBS",gxz:"Z5559ParcelasContratoSnImpObs",gxold:"O5559ParcelasContratoSnImpObs",gxvar:"A5559ParcelasContratoSnImpObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5559ParcelasContratoSnImpObs=Value},v2z:function(Value){gx.O.Z5559ParcelasContratoSnImpObs=Value},v2c:function(row){gx.fn.setGridControlValue("PARCELASCONTRATOSNIMPOBS",row || gx.fn.currentGridRowImpl(49),gx.O.A5559ParcelasContratoSnImpObs,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5559ParcelasContratoSnImpObs=this.val()},val:function(row){return gx.fn.getGridControlValue("PARCELASCONTRATOSNIMPOBS",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARCELASCONTRATOSNIMPVENC",gxz:"Z5558ParcelasContratoSnImpVenc",gxold:"O5558ParcelasContratoSnImpVenc",gxvar:"A5558ParcelasContratoSnImpVenc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5558ParcelasContratoSnImpVenc=Value},v2z:function(Value){gx.O.Z5558ParcelasContratoSnImpVenc=Value},v2c:function(row){gx.fn.setGridControlValue("PARCELASCONTRATOSNIMPVENC",row || gx.fn.currentGridRowImpl(49),gx.O.A5558ParcelasContratoSnImpVenc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5558ParcelasContratoSnImpVenc=this.val()},val:function(row){return gx.fn.getGridControlValue("PARCELASCONTRATOSNIMPVENC",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECSITUACAO",gxz:"Z1692ContaPagRecSituacao",gxold:"O1692ContaPagRecSituacao",gxvar:"A1692ContaPagRecSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1692ContaPagRecSituacao=Value},v2z:function(Value){gx.O.Z1692ContaPagRecSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(49),gx.O.A1692ContaPagRecSituacao)},c2v:function(){gx.O.A1692ContaPagRecSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV30ContratoNumero = 0 ;
   this.ZV30ContratoNumero = 0 ;
   this.OV30ContratoNumero = 0 ;
   this.AV31ContratoClienteId = 0 ;
   this.ZV31ContratoClienteId = 0 ;
   this.OV31ContratoClienteId = 0 ;
   this.AV32ContratoClienteFantasia = "" ;
   this.ZV32ContratoClienteFantasia = "" ;
   this.OV32ContratoClienteFantasia = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1716ContaPagRecNoParcela = 0 ;
   this.O1716ContaPagRecNoParcela = 0 ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.Z1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.O1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.Z1713ContaPagRecVlrConta = 0 ;
   this.O1713ContaPagRecVlrConta = 0 ;
   this.Z2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.O2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.ZV33StConta = "" ;
   this.OV33StConta = "" ;
   this.ZV35BmpSnImpObs = "" ;
   this.OV35BmpSnImpObs = "" ;
   this.ZV34BmpSnImpVenc = "" ;
   this.OV34BmpSnImpVenc = "" ;
   this.ZV37bmpObs = "" ;
   this.OV37bmpObs = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5288ContratoEmpresaId = "" ;
   this.O5288ContratoEmpresaId = "" ;
   this.Z5289ContratoNumero = 0 ;
   this.O5289ContratoNumero = 0 ;
   this.Z1685ContaPagRecEmpresaId = "" ;
   this.O1685ContaPagRecEmpresaId = "" ;
   this.Z5559ParcelasContratoSnImpObs = "" ;
   this.O5559ParcelasContratoSnImpObs = "" ;
   this.Z5558ParcelasContratoSnImpVenc = "" ;
   this.O5558ParcelasContratoSnImpVenc = "" ;
   this.Z1692ContaPagRecSituacao = "" ;
   this.O1692ContaPagRecSituacao = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV30ContratoNumero = 0 ;
   this.AV31ContratoClienteId = 0 ;
   this.AV32ContratoClienteFantasia = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV29ContratoEmpresaId = "" ;
   this.A1715ContaPagRecVlrPagamento = 0 ;
   this.A1714ContaPagRecVlrDesconto = 0 ;
   this.A1712ContaPagRecVlrAcrescimo = 0 ;
   this.A1716ContaPagRecNoParcela = 0 ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.AV33StConta = "" ;
   this.AV35BmpSnImpObs = "" ;
   this.AV34BmpSnImpVenc = "" ;
   this.AV37bmpObs = "" ;
   this.AV7bmpAlt = "" ;
   this.AV16bmpCon = "" ;
   this.A5288ContratoEmpresaId = "" ;
   this.A5289ContratoNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A5559ParcelasContratoSnImpObs = "" ;
   this.A5558ParcelasContratoSnImpVenc = "" ;
   this.A1692ContaPagRecSituacao = "" ;
   this.AV38SnRecuperaFiltro = "" ;
   this.AV36EmpresaContaPagRec = "" ;
   this.Events = {"e11wc2_client": ["'ANTERIOR'", true] ,"e12wc2_client": ["'PROXIMO'", true] ,"e15wc2_client": ["VPAGINA.CLICK", true] ,"e13wc2_client": ["'FECHAR'", true] ,"e14wc2_client": ["'PROCURAR'", true] ,"e19wc2_client": ["'CONSULTAR'", true] ,"e20wc2_client": ["'ALTERAR'", true] ,"e21wc2_client": ["'ATUALIZAPAGINA'", true] ,"e23wc2_client": ["ENTER", true] ,"e24wc2_client": ["CANCEL", true] ,"e22wc2_client": ["'OBSCONTA'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV30ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV37bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5558ParcelasContratoSnImpVenc',fld:'PARCELASCONTRATOSNIMPVENC'},{av:'A5559ParcelasContratoSnImpObs',fld:'PARCELASCONTRATOSNIMPOBS'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV30ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV37bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5558ParcelasContratoSnImpVenc',fld:'PARCELASCONTRATOSNIMPVENC'},{av:'A5559ParcelasContratoSnImpObs',fld:'PARCELASCONTRATOSNIMPOBS'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'}],[{ctrl:'CONTAPAGRECNOPARCELA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECNOPARCELA","Title")',ctrl:'CONTAPAGRECNOPARCELA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CONTAPAGRECNUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECNUMERO","Title")',ctrl:'CONTAPAGRECNUMERO',prop:'Title'},{ctrl:'CONTAPAGRECDTVENCIMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTVENCIMENTO","Title")',ctrl:'CONTAPAGRECDTVENCIMENTO',prop:'Title'},{ctrl:'CONTAPAGRECVLRCONTA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECVLRCONTA","Title")',ctrl:'CONTAPAGRECVLRCONTA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5558ParcelasContratoSnImpVenc',fld:'PARCELASCONTRATOSNIMPVENC'},{av:'A5559ParcelasContratoSnImpObs',fld:'PARCELASCONTRATOSNIMPOBS'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'}],[{av:'AV34BmpSnImpVenc',fld:'vBMPSNIMPVENC'},{av:'AV35BmpSnImpObs',fld:'vBMPSNIMPOBS'},{av:'AV33StConta',fld:'vSTCONTA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV30ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV37bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5558ParcelasContratoSnImpVenc',fld:'PARCELASCONTRATOSNIMPVENC'},{av:'A5559ParcelasContratoSnImpObs',fld:'PARCELASCONTRATOSNIMPOBS'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV30ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV37bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5558ParcelasContratoSnImpVenc',fld:'PARCELASCONTRATOSNIMPVENC'},{av:'A5559ParcelasContratoSnImpObs',fld:'PARCELASCONTRATOSNIMPOBS'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV30ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV37bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5558ParcelasContratoSnImpVenc',fld:'PARCELASCONTRATOSNIMPVENC'},{av:'A5559ParcelasContratoSnImpObs',fld:'PARCELASCONTRATOSNIMPOBS'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV30ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV37bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5558ParcelasContratoSnImpVenc',fld:'PARCELASCONTRATOSNIMPVENC'},{av:'A5559ParcelasContratoSnImpObs',fld:'PARCELASCONTRATOSNIMPOBS'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5288ContratoEmpresaId',fld:'CONTRATOEMPRESAID'},{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV31ContratoClienteId',fld:'vCONTRATOCLIENTEID'},{av:'AV32ContratoClienteFantasia',fld:'vCONTRATOCLIENTEFANTASIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV32ContratoClienteFantasia',fld:'vCONTRATOCLIENTEFANTASIA'},{av:'AV31ContratoClienteId',fld:'vCONTRATOCLIENTEID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'A5288ContratoEmpresaId',fld:'CONTRATOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5288ContratoEmpresaId',fld:'CONTRATOEMPRESAID'},{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV31ContratoClienteId',fld:'vCONTRATOCLIENTEID'},{av:'AV32ContratoClienteFantasia',fld:'vCONTRATOCLIENTEFANTASIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV32ContratoClienteFantasia',fld:'vCONTRATOCLIENTEFANTASIA'},{av:'AV31ContratoClienteId',fld:'vCONTRATOCLIENTEID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'A5288ContratoEmpresaId',fld:'CONTRATOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'OBSCONTA'"] = [[{av:'AV36EmpresaContaPagRec',fld:'vEMPRESACONTAPAGREC'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV30ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV37bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5558ParcelasContratoSnImpVenc',fld:'PARCELASCONTRATOSNIMPVENC'},{av:'A5559ParcelasContratoSnImpObs',fld:'PARCELASCONTRATOSNIMPOBS'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'}],[]];
   this.setVCMap("A1712ContaPagRecVlrAcrescimo", "CONTAPAGRECVLRACRESCIMO", 0, "decimal");
   this.setVCMap("A1714ContaPagRecVlrDesconto", "CONTAPAGRECVLRDESCONTO", 0, "decimal");
   this.setVCMap("A1715ContaPagRecVlrPagamento", "CONTAPAGRECVLRPAGAMENTO", 0, "decimal");
   this.setVCMap("AV29ContratoEmpresaId", "vCONTRATOEMPRESAID", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV36EmpresaContaPagRec", "vEMPRESACONTAPAGREC", 0, "char");
   this.setVCMap("AV29ContratoEmpresaId", "vCONTRATOEMPRESAID", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar({rfrVar:"AV29ContratoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV37bmpObs", rfrProp:"Value", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar({rfrVar:"AV37bmpObs", rfrProp:"Tooltiptext", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar({rfrVar:"AV38SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A5558ParcelasContratoSnImpVenc", rfrProp:"Value", gxAttId:"5558"});
   GridContainer.addRefreshingVar({rfrVar:"A5559ParcelasContratoSnImpObs", rfrProp:"Value", gxAttId:"5559"});
   GridContainer.addRefreshingVar({rfrVar:"A1692ContaPagRecSituacao", rfrProp:"Value", gxAttId:"1692"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hparcelascontrato());
