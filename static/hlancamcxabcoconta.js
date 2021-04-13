/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:13:5.55
*/
gx.evt.autoSkip = false;
gx.define('hlancamcxabcoconta', false, function () {
   this.ServerClass =  "hlancamcxabcoconta" ;
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
      this.A1713ContaPagRecVlrConta=gx.fn.getDecimalValue("CONTAPAGRECVLRCONTA",'.',',') ;
      this.A1714ContaPagRecVlrDesconto=gx.fn.getDecimalValue("CONTAPAGRECVLRDESCONTO",'.',',') ;
      this.A1715ContaPagRecVlrPagamento=gx.fn.getDecimalValue("CONTAPAGRECVLRPAGAMENTO",'.',',') ;
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV45SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV39ContaLancamValor=gx.fn.getDecimalValue("vCONTALANCAMVALOR",'.',',') ;
      this.A1685ContaPagRecEmpresaId=gx.fn.getControlValue("CONTAPAGRECEMPRESAID") ;
      this.A1686ContaPagRecNumero=gx.fn.getIntegerValue("CONTAPAGRECNUMERO",'.') ;
      this.AV37LancamCxaBcoContaLanConNumero=gx.fn.getIntegerValue("vLANCAMCXABCOCONTALANCONNUMERO",'.') ;
      this.A1803ContaLancamSequencia=gx.fn.getIntegerValue("CONTALANCAMSEQUENCIA",'.') ;
      this.AV38LancamCxaBcoContaLanConSeq=gx.fn.getIntegerValue("vLANCAMCXABCOCONTALANCONSEQ",'.') ;
      this.A1807ContaLancamValor=gx.fn.getDecimalValue("CONTALANCAMVALOR",'.',',') ;
      this.AV33LancamentoCxaBcoCaiBanDescricao=gx.fn.getControlValue("vLANCAMENTOCXABCOCAIBANDESCRICAO") ;
      this.AV42LancamentoCxaBcoUsuarioInc=gx.fn.getControlValue("vLANCAMENTOCXABCOUSUARIOINC") ;
   };
   this.Valid_Lancamcxabcocontalanconnumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(57) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMCXABCOCONTALANCONNUMERO", gx.fn.currentGridRowImpl(57));
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
   this.Valid_Contapagreccliforid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(57) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECCLIFORID", gx.fn.currentGridRowImpl(57));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamcxabcocontacaibannumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(57) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMCXABCOCONTACAIBANNUMERO", gx.fn.currentGridRowImpl(57));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11b92_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12b92_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e15b92_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13b92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14b92_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e19b92_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e20b92_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e21b92_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e22b92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e23b92_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,29,31,36,39,42,44,46,48,51,53,54,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,80];
   this.GXLastCtrlId =80;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",57,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlancamcxabcoconta",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1948,58,"LANCAMCXABCOCONTALANCONSEQ","","","LancamCxaBcoContaLanConSeq","int",0,"px",3,3,"right",null,[],1948,"LancamCxaBcoContaLanConSeq",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1947,59,"LANCAMCXABCOCONTALANCONNUMERO","","","LancamCxaBcoContaLanConNumero","int",0,"px",8,8,"right",null,[],1947,"LancamCxaBcoContaLanConNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1695,60,"CONTAPAGRECDOCUMENTO","Documento","","ContaPagRecDocumento","svchar",0,"px",20,20,"left",null,[],1695,"ContaPagRecDocumento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1696,61,"CONTAPAGRECSEQDOCUME","Seq","","ContaPagRecSeqDocume","char",0,"px",3,3,"left",null,[],1696,"ContaPagRecSeqDocume",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1644,62,"CONTAPAGRECTIPCOBDESCRICAO","Tipo de cobrança","","ContaPagRecTipCobDescricao","svchar",0,"px",25,25,"left",null,[],1644,"ContaPagRecTipCobDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1699,63,"CONTAPAGRECDTEMISSAO","","","ContaPagRecDtEmissao","date",0,"px",10,10,"right",null,[],1699,"ContaPagRecDtEmissao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1701,64,"CONTAPAGRECDTVENCIMENTO","Vencimento","","ContaPagRecDtVencimento","date",0,"px",10,10,"right",null,[],1701,"ContaPagRecDtVencimento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1637,65,"CONTAPAGRECCLIFORID","","","ContaPagRecCliForId","int",0,"px",7,7,"right",null,[],1637,"ContaPagRecCliForId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1638,66,"CONTAPAGRECCLIFORFANTASIA","","","ContaPagRecCliForFantasia","svchar",0,"px",60,60,"left",null,[],1638,"ContaPagRecCliForFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Valordaconta",67,"vVALORDACONTA","Valor","","ValordaConta","decimal",0,"px",22,22,"right",null,[],"Valordaconta","ValordaConta",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2115,68,"CONTAPAGRECVLRATUALSEMSINAL","Valor atual","","ContaPagRecVlrAtualSemSinal","decimal",0,"px",22,22,"right",null,[],2115,"ContaPagRecVlrAtualSemSinal",true,2,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1692,69,"CONTAPAGRECSITUACAO","Situação","ContaPagRecSituacao","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",70,0,"px",17,"px","e19b92_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",71,0,"px",17,"px","e20b92_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1945,72,"LANCAMCXABCOCONTACAIBANNUMERO","Número Lançamento Caixa/Banco","","LancamCxaBcoContaCaiBanNumero","int",0,"px",8,8,"right",null,[],1945,"LancamCxaBcoContaCaiBanNumero",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1868,73,"LANCAMENTOCXABCOCAIBANID","Caixa/Banco","","LancamentoCxaBcoCaiBanId","int",0,"px",5,5,"right",null,[],1868,"LancamentoCxaBcoCaiBanId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCXABCONUMERO",gxz:"ZV27LancamentoCxaBcoNumero",gxold:"OV27LancamentoCxaBcoNumero",gxvar:"AV27LancamentoCxaBcoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27LancamentoCxaBcoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27LancamentoCxaBcoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCONUMERO",gx.O.AV27LancamentoCxaBcoNumero,0)},c2v:function(){gx.O.AV27LancamentoCxaBcoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCODOCUMENTO",gxz:"ZV35LancamentoCxaBcoDocumento",gxold:"OV35LancamentoCxaBcoDocumento",gxvar:"AV35LancamentoCxaBcoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35LancamentoCxaBcoDocumento=Value},v2z:function(Value){gx.O.ZV35LancamentoCxaBcoDocumento=Value},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCODOCUMENTO",gx.O.AV35LancamentoCxaBcoDocumento,0)},c2v:function(){gx.O.AV35LancamentoCxaBcoDocumento=this.val()},val:function(){return gx.fn.getControlValue("vLANCAMENTOCXABCODOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOCAIBANID",gxz:"ZV32LancamentoCxaBcoCaiBanId",gxold:"OV32LancamentoCxaBcoCaiBanId",gxvar:"AV32LancamentoCxaBcoCaiBanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCOCAIBANID",gx.O.AV32LancamentoCxaBcoCaiBanId,0)},c2v:function(){gx.O.AV32LancamentoCxaBcoCaiBanId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCOCAIBANID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOVALOR",gxz:"ZV36LancamentoCxaBcoValor",gxold:"OV36LancamentoCxaBcoValor",gxvar:"AV36LancamentoCxaBcoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36LancamentoCxaBcoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV36LancamentoCxaBcoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vLANCAMENTOCXABCOVALOR",gx.O.AV36LancamentoCxaBcoValor,2,',')},c2v:function(){gx.O.AV36LancamentoCxaBcoValor=this.val()},val:function(){return gx.fn.getDecimalValue("vLANCAMENTOCXABCOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCODATA",gxz:"ZV34LancamentoCxaBcoData",gxold:"OV34LancamentoCxaBcoData",gxvar:"AV34LancamentoCxaBcoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34LancamentoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV34LancamentoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCODATA",gx.O.AV34LancamentoCxaBcoData,0)},c2v:function(){gx.O.AV34LancamentoCxaBcoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCXABCODATA")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLE4",grid:0};
   GXValidFnc[39]={fld:"TABLE1",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   GXValidFnc[48]={fld:"TABLE5",grid:0};
   GXValidFnc[51]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMCXABCOCONTALANCONSEQ",gxz:"Z1948LancamCxaBcoContaLanConSeq",gxold:"O1948LancamCxaBcoContaLanConSeq",gxvar:"A1948LancamCxaBcoContaLanConSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1948LancamCxaBcoContaLanConSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1948LancamCxaBcoContaLanConSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMCXABCOCONTALANCONSEQ",row || gx.fn.currentGridRowImpl(57),gx.O.A1948LancamCxaBcoContaLanConSeq,0)},c2v:function(){gx.O.A1948LancamCxaBcoContaLanConSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMCXABCOCONTALANCONSEQ",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:this.Valid_Lancamcxabcocontalanconnumero,isvalid:null,rgrid:[],fld:"LANCAMCXABCOCONTALANCONNUMERO",gxz:"Z1947LancamCxaBcoContaLanConNumero",gxold:"O1947LancamCxaBcoContaLanConNumero",gxvar:"A1947LancamCxaBcoContaLanConNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1947LancamCxaBcoContaLanConNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1947LancamCxaBcoContaLanConNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMCXABCOCONTALANCONNUMERO",row || gx.fn.currentGridRowImpl(57),gx.O.A1947LancamCxaBcoContaLanConNumero,0)},c2v:function(){gx.O.A1947LancamCxaBcoContaLanConNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMCXABCOCONTALANCONNUMERO",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDOCUMENTO",gxz:"Z1695ContaPagRecDocumento",gxold:"O1695ContaPagRecDocumento",gxvar:"A1695ContaPagRecDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1695ContaPagRecDocumento=Value},v2z:function(Value){gx.O.Z1695ContaPagRecDocumento=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDOCUMENTO",row || gx.fn.currentGridRowImpl(57),gx.O.A1695ContaPagRecDocumento,0)},c2v:function(){gx.O.A1695ContaPagRecDocumento=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECDOCUMENTO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECSEQDOCUME",gxz:"Z1696ContaPagRecSeqDocume",gxold:"O1696ContaPagRecSeqDocume",gxvar:"A1696ContaPagRecSeqDocume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1696ContaPagRecSeqDocume=Value},v2z:function(Value){gx.O.Z1696ContaPagRecSeqDocume=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECSEQDOCUME",row || gx.fn.currentGridRowImpl(57),gx.O.A1696ContaPagRecSeqDocume,0)},c2v:function(){gx.O.A1696ContaPagRecSeqDocume=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECSEQDOCUME",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECTIPCOBDESCRICAO",gxz:"Z1644ContaPagRecTipCobDescricao",gxold:"O1644ContaPagRecTipCobDescricao",gxvar:"A1644ContaPagRecTipCobDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1644ContaPagRecTipCobDescricao=Value},v2z:function(Value){gx.O.Z1644ContaPagRecTipCobDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECTIPCOBDESCRICAO",row || gx.fn.currentGridRowImpl(57),gx.O.A1644ContaPagRecTipCobDescricao,0)},c2v:function(){gx.O.A1644ContaPagRecTipCobDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECTIPCOBDESCRICAO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTEMISSAO",gxz:"Z1699ContaPagRecDtEmissao",gxold:"O1699ContaPagRecDtEmissao",gxvar:"A1699ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(57),gx.O.A1699ContaPagRecDtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTVENCIMENTO",gxz:"Z1701ContaPagRecDtVencimento",gxold:"O1701ContaPagRecDtVencimento",gxvar:"A1701ContaPagRecDtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(57),gx.O.A1701ContaPagRecDtVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:this.Valid_Contapagreccliforid,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORID",gxz:"Z1637ContaPagRecCliForId",gxold:"O1637ContaPagRecCliForId",gxvar:"A1637ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1637ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1637ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(57),gx.O.A1637ContaPagRecCliForId,0)},c2v:function(){gx.O.A1637ContaPagRecCliForId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORFANTASIA",gxz:"Z1638ContaPagRecCliForFantasia",gxold:"O1638ContaPagRecCliForFantasia",gxvar:"A1638ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1638ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.Z1638ContaPagRecCliForFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(57),gx.O.A1638ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.A1638ContaPagRecCliForFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALORDACONTA",gxz:"ZV40ValordaConta",gxold:"OV40ValordaConta",gxvar:"AV40ValordaConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV40ValordaConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV40ValordaConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORDACONTA",row || gx.fn.currentGridRowImpl(57),gx.O.AV40ValordaConta,2,',')},c2v:function(){gx.O.AV40ValordaConta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORDACONTA",row || gx.fn.currentGridRowImpl(57),'.',',')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECVLRATUALSEMSINAL",gxz:"Z2115ContaPagRecVlrAtualSemSinal",gxold:"O2115ContaPagRecVlrAtualSemSinal",gxvar:"A2115ContaPagRecVlrAtualSemSinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2115ContaPagRecVlrAtualSemSinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2115ContaPagRecVlrAtualSemSinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CONTAPAGRECVLRATUALSEMSINAL",row || gx.fn.currentGridRowImpl(57),gx.O.A2115ContaPagRecVlrAtualSemSinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2115ContaPagRecVlrAtualSemSinal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CONTAPAGRECVLRATUALSEMSINAL",row || gx.fn.currentGridRowImpl(57),'.',',')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECSITUACAO",gxz:"Z1692ContaPagRecSituacao",gxold:"O1692ContaPagRecSituacao",gxvar:"A1692ContaPagRecSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1692ContaPagRecSituacao=Value},v2z:function(Value){gx.O.Z1692ContaPagRecSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(57),gx.O.A1692ContaPagRecSituacao)},c2v:function(){gx.O.A1692ContaPagRecSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(57),gx.O.AV8bmpExc,gx.O.AV50Bmpexc_GXI)},c2v:function(){gx.O.AV50Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV50Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(57),gx.O.AV16bmpCon,gx.O.AV51Bmpcon_GXI)},c2v:function(){gx.O.AV51Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV51Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:this.Valid_Lancamcxabcocontacaibannumero,isvalid:null,rgrid:[],fld:"LANCAMCXABCOCONTACAIBANNUMERO",gxz:"Z1945LancamCxaBcoContaCaiBanNumero",gxold:"O1945LancamCxaBcoContaCaiBanNumero",gxvar:"A1945LancamCxaBcoContaCaiBanNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1945LancamCxaBcoContaCaiBanNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1945LancamCxaBcoContaCaiBanNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMCXABCOCONTACAIBANNUMERO",row || gx.fn.currentGridRowImpl(57),gx.O.A1945LancamCxaBcoContaCaiBanNumero,0)},c2v:function(){gx.O.A1945LancamCxaBcoContaCaiBanNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMCXABCOCONTACAIBANNUMERO",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOCAIBANID",gxz:"Z1868LancamentoCxaBcoCaiBanId",gxold:"O1868LancamentoCxaBcoCaiBanId",gxvar:"A1868LancamentoCxaBcoCaiBanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1868LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1868LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOCAIBANID",row || gx.fn.currentGridRowImpl(57),gx.O.A1868LancamentoCxaBcoCaiBanId,0)},c2v:function(){gx.O.A1868LancamentoCxaBcoCaiBanId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCXABCOCAIBANID",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27LancamentoCxaBcoNumero = 0 ;
   this.ZV27LancamentoCxaBcoNumero = 0 ;
   this.OV27LancamentoCxaBcoNumero = 0 ;
   this.AV35LancamentoCxaBcoDocumento = "" ;
   this.ZV35LancamentoCxaBcoDocumento = "" ;
   this.OV35LancamentoCxaBcoDocumento = "" ;
   this.AV32LancamentoCxaBcoCaiBanId = 0 ;
   this.ZV32LancamentoCxaBcoCaiBanId = 0 ;
   this.OV32LancamentoCxaBcoCaiBanId = 0 ;
   this.AV36LancamentoCxaBcoValor = 0 ;
   this.ZV36LancamentoCxaBcoValor = 0 ;
   this.OV36LancamentoCxaBcoValor = 0 ;
   this.AV34LancamentoCxaBcoData = gx.date.nullDate() ;
   this.ZV34LancamentoCxaBcoData = gx.date.nullDate() ;
   this.OV34LancamentoCxaBcoData = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1948LancamCxaBcoContaLanConSeq = 0 ;
   this.O1948LancamCxaBcoContaLanConSeq = 0 ;
   this.Z1947LancamCxaBcoContaLanConNumero = 0 ;
   this.O1947LancamCxaBcoContaLanConNumero = 0 ;
   this.Z1695ContaPagRecDocumento = "" ;
   this.O1695ContaPagRecDocumento = "" ;
   this.Z1696ContaPagRecSeqDocume = "" ;
   this.O1696ContaPagRecSeqDocume = "" ;
   this.Z1644ContaPagRecTipCobDescricao = "" ;
   this.O1644ContaPagRecTipCobDescricao = "" ;
   this.Z1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.O1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.Z1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.O1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.Z1637ContaPagRecCliForId = 0 ;
   this.O1637ContaPagRecCliForId = 0 ;
   this.Z1638ContaPagRecCliForFantasia = "" ;
   this.O1638ContaPagRecCliForFantasia = "" ;
   this.ZV40ValordaConta = 0 ;
   this.OV40ValordaConta = 0 ;
   this.Z2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.O2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.Z1692ContaPagRecSituacao = "" ;
   this.O1692ContaPagRecSituacao = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1945LancamCxaBcoContaCaiBanNumero = 0 ;
   this.O1945LancamCxaBcoContaCaiBanNumero = 0 ;
   this.Z1868LancamentoCxaBcoCaiBanId = 0 ;
   this.O1868LancamentoCxaBcoCaiBanId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27LancamentoCxaBcoNumero = 0 ;
   this.AV35LancamentoCxaBcoDocumento = "" ;
   this.AV32LancamentoCxaBcoCaiBanId = 0 ;
   this.AV36LancamentoCxaBcoValor = 0 ;
   this.AV34LancamentoCxaBcoData = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV33LancamentoCxaBcoCaiBanDescricao = "" ;
   this.AV42LancamentoCxaBcoUsuarioInc = "" ;
   this.A1944LancamCxaBcoContaCaiBanEmpId = "" ;
   this.A1715ContaPagRecVlrPagamento = 0 ;
   this.A1714ContaPagRecVlrDesconto = 0 ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1712ContaPagRecVlrAcrescimo = 0 ;
   this.A1946LancamCxaBcoContaLanConEmpId = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1642ContaPagRecTipCobEmpId = "" ;
   this.A1643ContaPagRecTipCobId = 0 ;
   this.A1948LancamCxaBcoContaLanConSeq = 0 ;
   this.A1947LancamCxaBcoContaLanConNumero = 0 ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1696ContaPagRecSeqDocume = "" ;
   this.A1644ContaPagRecTipCobDescricao = "" ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.AV40ValordaConta = 0 ;
   this.A2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.A1692ContaPagRecSituacao = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1945LancamCxaBcoContaCaiBanNumero = 0 ;
   this.A1868LancamentoCxaBcoCaiBanId = 0 ;
   this.A1803ContaLancamSequencia = 0 ;
   this.A1807ContaLancamValor = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV45SnRecuperaFiltro = "" ;
   this.AV39ContaLancamValor = 0 ;
   this.AV37LancamCxaBcoContaLanConNumero = 0 ;
   this.AV38LancamCxaBcoContaLanConSeq = 0 ;
   this.Events = {"e11b92_client": ["'ANTERIOR'", true] ,"e12b92_client": ["'PROXIMO'", true] ,"e15b92_client": ["VPAGINA.CLICK", true] ,"e13b92_client": ["'FECHAR'", true] ,"e14b92_client": ["'PROCURAR'", true] ,"e19b92_client": ["'EXCLUIR'", true] ,"e20b92_client": ["'CONSULTAR'", true] ,"e21b92_client": ["'ATUALIZAPAGINA'", true] ,"e22b92_client": ["ENTER", true] ,"e23b92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'AV39ContaLancamValor',fld:'vCONTALANCAMVALOR'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV37LancamCxaBcoContaLanConNumero',fld:'vLANCAMCXABCOCONTALANCONNUMERO'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'AV38LancamCxaBcoContaLanConSeq',fld:'vLANCAMCXABCOCONTALANCONSEQ'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'AV39ContaLancamValor',fld:'vCONTALANCAMVALOR'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV37LancamCxaBcoContaLanConNumero',fld:'vLANCAMCXABCOCONTALANCONNUMERO'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'AV38LancamCxaBcoContaLanConSeq',fld:'vLANCAMCXABCOCONTALANCONSEQ'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'}],[{ctrl:'LANCAMCXABCOCONTALANCONSEQ',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMCXABCOCONTALANCONSEQ","Title")',ctrl:'LANCAMCXABCOCONTALANCONSEQ',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'LANCAMCXABCOCONTALANCONNUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMCXABCOCONTALANCONNUMERO","Title")',ctrl:'LANCAMCXABCOCONTALANCONNUMERO',prop:'Title'},{ctrl:'CONTAPAGRECCLIFORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECCLIFORID","Title")',ctrl:'CONTAPAGRECCLIFORID',prop:'Title'},{ctrl:'CONTAPAGRECCLIFORFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECCLIFORFANTASIA","Title")',ctrl:'CONTAPAGRECCLIFORFANTASIA',prop:'Title'},{ctrl:'CONTAPAGRECDTEMISSAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTEMISSAO","Title")',ctrl:'CONTAPAGRECDTEMISSAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'AV39ContaLancamValor',fld:'vCONTALANCAMVALOR'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV37LancamCxaBcoContaLanConNumero',fld:'vLANCAMCXABCOCONTALANCONNUMERO'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'AV38LancamCxaBcoContaLanConSeq',fld:'vLANCAMCXABCOCONTALANCONSEQ'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'}],[{av:'AV37LancamCxaBcoContaLanConNumero',fld:'vLANCAMCXABCOCONTALANCONNUMERO'},{av:'AV38LancamCxaBcoContaLanConSeq',fld:'vLANCAMCXABCOCONTALANCONSEQ'},{av:'AV40ValordaConta',fld:'vVALORDACONTA'},{av:'AV39ContaLancamValor',fld:'vCONTALANCAMVALOR'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'AV39ContaLancamValor',fld:'vCONTALANCAMVALOR'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV37LancamCxaBcoContaLanConNumero',fld:'vLANCAMCXABCOCONTALANCONNUMERO'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'AV38LancamCxaBcoContaLanConSeq',fld:'vLANCAMCXABCOCONTALANCONSEQ'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'AV39ContaLancamValor',fld:'vCONTALANCAMVALOR'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV37LancamCxaBcoContaLanConNumero',fld:'vLANCAMCXABCOCONTALANCONNUMERO'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'AV38LancamCxaBcoContaLanConSeq',fld:'vLANCAMCXABCOCONTALANCONSEQ'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'AV39ContaLancamValor',fld:'vCONTALANCAMVALOR'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV37LancamCxaBcoContaLanConNumero',fld:'vLANCAMCXABCOCONTALANCONNUMERO'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'AV38LancamCxaBcoContaLanConSeq',fld:'vLANCAMCXABCOCONTALANCONSEQ'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'AV39ContaLancamValor',fld:'vCONTALANCAMVALOR'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV37LancamCxaBcoContaLanConNumero',fld:'vLANCAMCXABCOCONTALANCONNUMERO'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'AV38LancamCxaBcoContaLanConSeq',fld:'vLANCAMCXABCOCONTALANCONSEQ'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV42LancamentoCxaBcoUsuarioInc',fld:'vLANCAMENTOCXABCOUSUARIOINC'},{av:'AV27LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'},{av:'AV32LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV33LancamentoCxaBcoCaiBanDescricao',fld:'vLANCAMENTOCXABCOCAIBANDESCRICAO'},{av:'AV34LancamentoCxaBcoData',fld:'vLANCAMENTOCXABCODATA'},{av:'AV35LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV36LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV48Pgmname',fld:'vPGMNAME'},{av:'AV41Data',fld:'vDATA'},{av:'A1868LancamentoCxaBcoCaiBanId',fld:'LANCAMENTOCXABCOCAIBANID'},{av:'A1945LancamCxaBcoContaCaiBanNumero',fld:'LANCAMCXABCOCONTACAIBANNUMERO'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV44SnPermitido',fld:'vSNPERMITIDO'},{av:'AV43PermAux',fld:'vPERMAUX'},{av:'AV41Data',fld:'vDATA'},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV42LancamentoCxaBcoUsuarioInc',fld:'vLANCAMENTOCXABCOUSUARIOINC'},{av:'AV36LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV35LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV34LancamentoCxaBcoData',fld:'vLANCAMENTOCXABCODATA'},{av:'AV33LancamentoCxaBcoCaiBanDescricao',fld:'vLANCAMENTOCXABCOCAIBANDESCRICAO'},{av:'AV32LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1945LancamCxaBcoContaCaiBanNumero',fld:'LANCAMCXABCOCONTACAIBANNUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1945LancamCxaBcoContaCaiBanNumero',fld:'LANCAMCXABCOCONTACAIBANNUMERO'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'AV32LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV33LancamentoCxaBcoCaiBanDescricao',fld:'vLANCAMENTOCXABCOCAIBANDESCRICAO'},{av:'AV34LancamentoCxaBcoData',fld:'vLANCAMENTOCXABCODATA'},{av:'AV35LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV36LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV42LancamentoCxaBcoUsuarioInc',fld:'vLANCAMENTOCXABCOUSUARIOINC'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV42LancamentoCxaBcoUsuarioInc',fld:'vLANCAMENTOCXABCOUSUARIOINC'},{av:'AV36LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV35LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV34LancamentoCxaBcoData',fld:'vLANCAMENTOCXABCODATA'},{av:'AV33LancamentoCxaBcoCaiBanDescricao',fld:'vLANCAMENTOCXABCOCAIBANDESCRICAO'},{av:'AV32LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1945LancamCxaBcoContaCaiBanNumero',fld:'LANCAMCXABCOCONTACAIBANNUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'AV39ContaLancamValor',fld:'vCONTALANCAMVALOR'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV37LancamCxaBcoContaLanConNumero',fld:'vLANCAMCXABCOCONTALANCONNUMERO'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'AV38LancamCxaBcoContaLanConSeq',fld:'vLANCAMCXABCOCONTALANCONSEQ'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'}],[]];
   this.setVCMap("A1712ContaPagRecVlrAcrescimo", "CONTAPAGRECVLRACRESCIMO", 0, "decimal");
   this.setVCMap("A1713ContaPagRecVlrConta", "CONTAPAGRECVLRCONTA", 0, "decimal");
   this.setVCMap("A1714ContaPagRecVlrDesconto", "CONTAPAGRECVLRDESCONTO", 0, "decimal");
   this.setVCMap("A1715ContaPagRecVlrPagamento", "CONTAPAGRECVLRPAGAMENTO", 0, "decimal");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV45SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39ContaLancamValor", "vCONTALANCAMVALOR", 0, "decimal");
   this.setVCMap("A1685ContaPagRecEmpresaId", "CONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("A1686ContaPagRecNumero", "CONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV37LancamCxaBcoContaLanConNumero", "vLANCAMCXABCOCONTALANCONNUMERO", 0, "int");
   this.setVCMap("A1803ContaLancamSequencia", "CONTALANCAMSEQUENCIA", 0, "int");
   this.setVCMap("AV38LancamCxaBcoContaLanConSeq", "vLANCAMCXABCOCONTALANCONSEQ", 0, "int");
   this.setVCMap("A1807ContaLancamValor", "CONTALANCAMVALOR", 0, "decimal");
   this.setVCMap("AV33LancamentoCxaBcoCaiBanDescricao", "vLANCAMENTOCXABCOCAIBANDESCRICAO", 0, "svchar");
   this.setVCMap("AV42LancamentoCxaBcoUsuarioInc", "vLANCAMENTOCXABCOUSUARIOINC", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV45SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39ContaLancamValor", "vCONTALANCAMVALOR", 0, "decimal");
   this.setVCMap("A1685ContaPagRecEmpresaId", "CONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("A1686ContaPagRecNumero", "CONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV37LancamCxaBcoContaLanConNumero", "vLANCAMCXABCOCONTALANCONNUMERO", 0, "int");
   this.setVCMap("A1803ContaLancamSequencia", "CONTALANCAMSEQUENCIA", 0, "int");
   this.setVCMap("AV38LancamCxaBcoContaLanConSeq", "vLANCAMCXABCOCONTALANCONSEQ", 0, "int");
   this.setVCMap("A1807ContaLancamValor", "CONTALANCAMVALOR", 0, "decimal");
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV45SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1947LancamCxaBcoContaLanConNumero", rfrProp:"Value", gxAttId:"1947"});
   GridContainer.addRefreshingVar({rfrVar:"A1948LancamCxaBcoContaLanConSeq", rfrProp:"Value", gxAttId:"1948"});
   GridContainer.addRefreshingVar({rfrVar:"AV39ContaLancamValor"});
   GridContainer.addRefreshingVar({rfrVar:"A1685ContaPagRecEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A1686ContaPagRecNumero"});
   GridContainer.addRefreshingVar({rfrVar:"AV37LancamCxaBcoContaLanConNumero"});
   GridContainer.addRefreshingVar({rfrVar:"A1803ContaLancamSequencia"});
   GridContainer.addRefreshingVar({rfrVar:"AV38LancamCxaBcoContaLanConSeq"});
   GridContainer.addRefreshingVar({rfrVar:"A1807ContaLancamValor"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlancamcxabcoconta());
