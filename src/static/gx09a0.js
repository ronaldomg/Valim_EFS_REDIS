/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:29:18.98
*/
gx.evt.autoSkip = false;
gx.define('gx09a0', false, function () {
   this.ServerClass =  "gx09a0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV13pEmpresaPessoasEmpresaId=gx.fn.getControlValue("vPEMPRESAPESSOASEMPRESAID") ;
      this.AV14pPessoaId=gx.fn.getIntegerValue("vPPESSOAID",'.') ;
      this.AV15pMensalidadePagRec=gx.fn.getControlValue("vPMENSALIDADEPAGREC") ;
      this.AV16pMensalidadeAno=gx.fn.getIntegerValue("vPMENSALIDADEANO",'.') ;
      this.AV17pMensalidadeMes=gx.fn.getIntegerValue("vPMENSALIDADEMES",'.') ;
   };
   this.Validv_Cmensalidadepagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCMENSALIDADEPAGREC");
         this.AnyError  = 0;
         if ( ! ( this.AV8cMensalidadePagRec == "0" || this.AV8cMensalidadePagRec == "P" || this.AV8cMensalidadePagRec == "R" || (""==this.AV8cMensalidadePagRec) ) )
         {
            try {
               gxballoon.setError("Campo cMensalidadePagRec fora do intervalo");
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
   this.e131lj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141lj1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx09a0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(227,53,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(69,54,"PESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(3085,55,"MENSALIDADEPAGREC","Pagar/Receber","MensalidadePagRec","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(2009,56,"MENSALIDADEANO","Ano","","MensalidadeAno","int",0,"px",4,4,"right",null,[],2009,"MensalidadeAno",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2010,57,"MENSALIDADEMES","Mês","","MensalidadeMes","int",0,"px",2,2,"right",null,[],2010,"MensalidadeMes",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2011,58,"MENSALIDADEDIAVENCIMENTO","Dia Vencimento","Selecionar","MensalidadeDiaVencimento","int",0,"px",2,2,"right",null,[],2011,"MensalidadeDiaVencimento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2008,59,"MENSALIDADEPCACRDES","Percentual Acréscimo/Desconto","","MensalidadePcAcrDes","decimal",0,"px",7,7,"right",null,[],2008,"MensalidadePcAcrDes",true,3,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2012,60,"MENSALIDADEVALOR","Valor","","MensalidadeValor","decimal",0,"px",13,13,"right",null,[],2012,"MensalidadeValor",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKEMPRESAPESSOASEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESAPESSOASEMPRESAID",gxz:"ZV6cEmpresaPessoasEmpresaId",gxold:"OV6cEmpresaPessoasEmpresaId",gxvar:"AV6cEmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESAPESSOASEMPRESAID",gx.O.AV6cEmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV6cEmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPESSOAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOAID",gxz:"ZV7cPessoaId",gxold:"OV7cPessoaId",gxvar:"AV7cPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPESSOAID",gx.O.AV7cPessoaId,0)},c2v:function(){gx.O.AV7cPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKMENSALIDADEPAGREC", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cmensalidadepagrec,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMENSALIDADEPAGREC",gxz:"ZV8cMensalidadePagRec",gxold:"OV8cMensalidadePagRec",gxvar:"AV8cMensalidadePagRec",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cMensalidadePagRec=Value},v2z:function(Value){gx.O.ZV8cMensalidadePagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vCMENSALIDADEPAGREC",gx.O.AV8cMensalidadePagRec)},c2v:function(){gx.O.AV8cMensalidadePagRec=this.val()},val:function(){return gx.fn.getControlValue("vCMENSALIDADEPAGREC")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKMENSALIDADEANO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMENSALIDADEANO",gxz:"ZV9cMensalidadeAno",gxold:"OV9cMensalidadeAno",gxvar:"AV9cMensalidadeAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cMensalidadeAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cMensalidadeAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENSALIDADEANO",gx.O.AV9cMensalidadeAno,0)},c2v:function(){gx.O.AV9cMensalidadeAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENSALIDADEANO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKMENSALIDADEMES", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMENSALIDADEMES",gxz:"ZV10cMensalidadeMes",gxold:"OV10cMensalidadeMes",gxvar:"AV10cMensalidadeMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cMensalidadeMes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cMensalidadeMes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENSALIDADEMES",gx.O.AV10cMensalidadeMes,0)},c2v:function(){gx.O.AV10cMensalidadeMes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENSALIDADEMES",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKMENSALIDADEDIAVENCIMENTO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMENSALIDADEDIAVENCIMENTO",gxz:"ZV11cMensalidadeDiaVencimento",gxold:"OV11cMensalidadeDiaVencimento",gxvar:"AV11cMensalidadeDiaVencimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cMensalidadeDiaVencimento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cMensalidadeDiaVencimento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENSALIDADEDIAVENCIMENTO",gx.O.AV11cMensalidadeDiaVencimento,0)},c2v:function(){gx.O.AV11cMensalidadeDiaVencimento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENSALIDADEDIAVENCIMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKMENSALIDADEPCACRDES", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"decimal",len:7,dec:3,sign:true,pic:"ZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMENSALIDADEPCACRDES",gxz:"ZV12cMensalidadePcAcrDes",gxold:"OV12cMensalidadePcAcrDes",gxvar:"AV12cMensalidadePcAcrDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cMensalidadePcAcrDes=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV12cMensalidadePcAcrDes=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCMENSALIDADEPCACRDES",gx.O.AV12cMensalidadePcAcrDes,3,',')},c2v:function(){gx.O.AV12cMensalidadePcAcrDes=this.val()},val:function(){return gx.fn.getDecimalValue("vCMENSALIDADEPCACRDES",'.',',')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV20Linkselection_GXI)},c2v:function(){gx.O.AV20Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV20Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(51),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEPAGREC",gxz:"Z3085MensalidadePagRec",gxold:"O3085MensalidadePagRec",gxvar:"A3085MensalidadePagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3085MensalidadePagRec=Value},v2z:function(Value){gx.O.Z3085MensalidadePagRec=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MENSALIDADEPAGREC",row || gx.fn.currentGridRowImpl(51),gx.O.A3085MensalidadePagRec);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3085MensalidadePagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("MENSALIDADEPAGREC",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEANO",gxz:"Z2009MensalidadeAno",gxold:"O2009MensalidadeAno",gxvar:"A2009MensalidadeAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2009MensalidadeAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2009MensalidadeAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSALIDADEANO",row || gx.fn.currentGridRowImpl(51),gx.O.A2009MensalidadeAno,0)},c2v:function(){gx.O.A2009MensalidadeAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENSALIDADEANO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEMES",gxz:"Z2010MensalidadeMes",gxold:"O2010MensalidadeMes",gxvar:"A2010MensalidadeMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2010MensalidadeMes=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2010MensalidadeMes=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSALIDADEMES",row || gx.fn.currentGridRowImpl(51),gx.O.A2010MensalidadeMes,0)},c2v:function(){gx.O.A2010MensalidadeMes=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENSALIDADEMES",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEDIAVENCIMENTO",gxz:"Z2011MensalidadeDiaVencimento",gxold:"O2011MensalidadeDiaVencimento",gxvar:"A2011MensalidadeDiaVencimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2011MensalidadeDiaVencimento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2011MensalidadeDiaVencimento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSALIDADEDIAVENCIMENTO",row || gx.fn.currentGridRowImpl(51),gx.O.A2011MensalidadeDiaVencimento,0)},c2v:function(){gx.O.A2011MensalidadeDiaVencimento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENSALIDADEDIAVENCIMENTO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"decimal",len:7,dec:3,sign:true,pic:"ZZ9.999",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEPCACRDES",gxz:"Z2008MensalidadePcAcrDes",gxold:"O2008MensalidadePcAcrDes",gxvar:"A2008MensalidadePcAcrDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2008MensalidadePcAcrDes=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2008MensalidadePcAcrDes=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MENSALIDADEPCACRDES",row || gx.fn.currentGridRowImpl(51),gx.O.A2008MensalidadePcAcrDes,3,',')},c2v:function(){gx.O.A2008MensalidadePcAcrDes=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MENSALIDADEPCACRDES",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"decimal",len:11,dec:2,sign:false,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEVALOR",gxz:"Z2012MensalidadeValor",gxold:"O2012MensalidadeValor",gxvar:"A2012MensalidadeValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2012MensalidadeValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2012MensalidadeValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MENSALIDADEVALOR",row || gx.fn.currentGridRowImpl(51),gx.O.A2012MensalidadeValor,2,',')},c2v:function(){gx.O.A2012MensalidadeValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MENSALIDADEVALOR",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cEmpresaPessoasEmpresaId = "" ;
   this.ZV6cEmpresaPessoasEmpresaId = "" ;
   this.OV6cEmpresaPessoasEmpresaId = "" ;
   this.AV7cPessoaId = 0 ;
   this.ZV7cPessoaId = 0 ;
   this.OV7cPessoaId = 0 ;
   this.AV8cMensalidadePagRec = "" ;
   this.ZV8cMensalidadePagRec = "" ;
   this.OV8cMensalidadePagRec = "" ;
   this.AV9cMensalidadeAno = 0 ;
   this.ZV9cMensalidadeAno = 0 ;
   this.OV9cMensalidadeAno = 0 ;
   this.AV10cMensalidadeMes = 0 ;
   this.ZV10cMensalidadeMes = 0 ;
   this.OV10cMensalidadeMes = 0 ;
   this.AV11cMensalidadeDiaVencimento = 0 ;
   this.ZV11cMensalidadeDiaVencimento = 0 ;
   this.OV11cMensalidadeDiaVencimento = 0 ;
   this.AV12cMensalidadePcAcrDes = 0 ;
   this.ZV12cMensalidadePcAcrDes = 0 ;
   this.OV12cMensalidadePcAcrDes = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z3085MensalidadePagRec = "" ;
   this.O3085MensalidadePagRec = "" ;
   this.Z2009MensalidadeAno = 0 ;
   this.O2009MensalidadeAno = 0 ;
   this.Z2010MensalidadeMes = 0 ;
   this.O2010MensalidadeMes = 0 ;
   this.Z2011MensalidadeDiaVencimento = 0 ;
   this.O2011MensalidadeDiaVencimento = 0 ;
   this.Z2008MensalidadePcAcrDes = 0 ;
   this.O2008MensalidadePcAcrDes = 0 ;
   this.Z2012MensalidadeValor = 0 ;
   this.O2012MensalidadeValor = 0 ;
   this.AV6cEmpresaPessoasEmpresaId = "" ;
   this.AV7cPessoaId = 0 ;
   this.AV8cMensalidadePagRec = "" ;
   this.AV9cMensalidadeAno = 0 ;
   this.AV10cMensalidadeMes = 0 ;
   this.AV11cMensalidadeDiaVencimento = 0 ;
   this.AV12cMensalidadePcAcrDes = 0 ;
   this.AV13pEmpresaPessoasEmpresaId = "" ;
   this.AV14pPessoaId = 0 ;
   this.AV15pMensalidadePagRec = "" ;
   this.AV16pMensalidadeAno = 0 ;
   this.AV17pMensalidadeMes = 0 ;
   this.AV5LinkSelection = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A3085MensalidadePagRec = "" ;
   this.A2009MensalidadeAno = 0 ;
   this.A2010MensalidadeMes = 0 ;
   this.A2011MensalidadeDiaVencimento = 0 ;
   this.A2008MensalidadePcAcrDes = 0 ;
   this.A2012MensalidadeValor = 0 ;
   this.Events = {"e131lj2_client": ["ENTER", true] ,"e141lj1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cMensalidadePagRec',fld:'vCMENSALIDADEPAGREC'},{av:'AV9cMensalidadeAno',fld:'vCMENSALIDADEANO'},{av:'AV10cMensalidadeMes',fld:'vCMENSALIDADEMES'},{av:'AV11cMensalidadeDiaVencimento',fld:'vCMENSALIDADEDIAVENCIMENTO'},{av:'AV12cMensalidadePcAcrDes',fld:'vCMENSALIDADEPCACRDES'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3085MensalidadePagRec',fld:'MENSALIDADEPAGREC'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'}],[{av:'AV13pEmpresaPessoasEmpresaId',fld:'vPEMPRESAPESSOASEMPRESAID'},{av:'AV14pPessoaId',fld:'vPPESSOAID'},{av:'AV15pMensalidadePagRec',fld:'vPMENSALIDADEPAGREC'},{av:'AV16pMensalidadeAno',fld:'vPMENSALIDADEANO'},{av:'AV17pMensalidadeMes',fld:'vPMENSALIDADEMES'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cMensalidadePagRec',fld:'vCMENSALIDADEPAGREC'},{av:'AV9cMensalidadeAno',fld:'vCMENSALIDADEANO'},{av:'AV10cMensalidadeMes',fld:'vCMENSALIDADEMES'},{av:'AV11cMensalidadeDiaVencimento',fld:'vCMENSALIDADEDIAVENCIMENTO'},{av:'AV12cMensalidadePcAcrDes',fld:'vCMENSALIDADEPCACRDES'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cMensalidadePagRec',fld:'vCMENSALIDADEPAGREC'},{av:'AV9cMensalidadeAno',fld:'vCMENSALIDADEANO'},{av:'AV10cMensalidadeMes',fld:'vCMENSALIDADEMES'},{av:'AV11cMensalidadeDiaVencimento',fld:'vCMENSALIDADEDIAVENCIMENTO'},{av:'AV12cMensalidadePcAcrDes',fld:'vCMENSALIDADEPCACRDES'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cMensalidadePagRec',fld:'vCMENSALIDADEPAGREC'},{av:'AV9cMensalidadeAno',fld:'vCMENSALIDADEANO'},{av:'AV10cMensalidadeMes',fld:'vCMENSALIDADEMES'},{av:'AV11cMensalidadeDiaVencimento',fld:'vCMENSALIDADEDIAVENCIMENTO'},{av:'AV12cMensalidadePcAcrDes',fld:'vCMENSALIDADEPCACRDES'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cMensalidadePagRec',fld:'vCMENSALIDADEPAGREC'},{av:'AV9cMensalidadeAno',fld:'vCMENSALIDADEANO'},{av:'AV10cMensalidadeMes',fld:'vCMENSALIDADEMES'},{av:'AV11cMensalidadeDiaVencimento',fld:'vCMENSALIDADEDIAVENCIMENTO'},{av:'AV12cMensalidadePcAcrDes',fld:'vCMENSALIDADEPCACRDES'}],[]];
   this.setVCMap("AV13pEmpresaPessoasEmpresaId", "vPEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV14pPessoaId", "vPPESSOAID", 0, "int");
   this.setVCMap("AV15pMensalidadePagRec", "vPMENSALIDADEPAGREC", 0, "char");
   this.setVCMap("AV16pMensalidadeAno", "vPMENSALIDADEANO", 0, "int");
   this.setVCMap("AV17pMensalidadeMes", "vPMENSALIDADEMES", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx09a0());
