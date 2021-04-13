/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:53:23.8
*/
gx.evt.autoSkip = false;
gx.define('hregistrarlancamento', false, function () {
   this.ServerClass =  "hregistrarlancamento" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'FINALIZAR'");
   this.addKeyListener("3", "'INSERIRNOVOITEM'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV10EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV54Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A281HistoricoDescricao=gx.fn.getControlValue("HISTORICODESCRICAO") ;
      this.A336ItensLancamentoContabilHistori=gx.fn.getControlValue("ITENSLANCAMENTOCONTABILHISTORI") ;
   };
   this.Valid_Lancamentocontabilid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCONTABILID", gx.fn.currentGridRowImpl(41));
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
   this.Valid_Contacontabilid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTACONTABILID", gx.fn.currentGridRowImpl(41));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocontabilempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCONTABILEMPRESAID", gx.fn.currentGridRowImpl(41));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Empresacontacontabilempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("EMPRESACONTACONTABILEMPRESAID", gx.fn.currentGridRowImpl(41));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocontabilid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCONTABILID", gx.fn.currentGridRowImpl(41));
         this.AnyError  = 0;
         this.standaloneModal3O3( );
         this.standaloneNotModal3O3( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contacontabilid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTACONTABILID", gx.fn.currentGridRowImpl(41));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocontabilempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCONTABILEMPRESAID", gx.fn.currentGridRowImpl(41));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Empresacontacontabilempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("EMPRESACONTACONTABILEMPRESAID", gx.fn.currentGridRowImpl(41));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e143o2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e123o2_client=function()
   {
      this.executeServerEvent("'FINALIZAR'", false, null, false, false);
   };
   this.e183o2_client=function()
   {
      this.executeServerEvent("'EXCLUIRDEBITO'", true, arguments[0], false, false);
   };
   this.e193o2_client=function()
   {
      this.executeServerEvent("'EXCLUIRCREDITO'", true, arguments[0], false, false);
   };
   this.e133o2_client=function()
   {
      this.executeServerEvent("'INSERIRNOVOITEM'", false, null, false, false);
   };
   this.e203o2_client=function()
   {
      this.executeServerEvent("'DETALHARDEBITO'", true, arguments[0], false, false);
   };
   this.e213o2_client=function()
   {
      this.executeServerEvent("'EDITARDEBITO'", true, arguments[0], false, false);
   };
   this.e223o2_client=function()
   {
      this.executeServerEvent("'DETALHARCREDITO'", true, arguments[0], false, false);
   };
   this.e233o2_client=function()
   {
      this.executeServerEvent("'EDITARCREDITO'", true, arguments[0], false, false);
   };
   this.e113o2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e253o2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,9,12,14,16,18,21,23,34,37,40,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,68,71,75,78,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,104,107,109,112,114,117,119,120,126,132,133,134,135,136,137,138,139,140,141];
   this.GXLastCtrlId =141;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistrarlancamento",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(61,42,"LANCAMENTOCONTABILID","NºLancam","","LancamentoContabilId","int",0,"px",8,8,"right",null,[],61,"LancamentoContabilId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(60,43,"LANCAMENTOCONTABILDATA","Data","","LancamentoContabilData","date",0,"px",10,10,"right",null,[],60,"LancamentoContabilData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(62,44,"CONTACONTABILID","Conta Contábil","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],62,"ContaContabilId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(64,45,"CONTACONTABILTRADUTOR","Tradutor","","ContaContabilTradutor","int",0,"px",5,5,"right",null,[],64,"ContaContabilTradutor",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Contacontabilnome",46,"vCONTACONTABILNOME","Descrição","","ContaContabilNome","svchar",0,"px",33,33,"left",null,[],"Contacontabilnome","ContaContabilNome",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(63,47,"CONTACONTABILNOME","Descrição da Conta Contabil","","ContaContabilNome","svchar",0,"px",45,45,"left",null,[],63,"ContaContabilNome",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Historicodescricao",48,"vHISTORICODESCRICAO","Histórico","","HistoricoDescricao","svchar",0,"px",33,33,"left",null,[],"Historicodescricao","HistoricoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(66,49,"ITENSLANCAMENTOCONTABILVALOR","Valor","","ItensLancamentoContabilValor","decimal",0,"px",18,18,"right",null,[],66,"ItensLancamentoContabilValor",true,2,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("&Bmpdet","vBMPDET",50,0,"px",17,"px","e203o2_client","","","Image","");
   Grid1Container.addBitmap("&Bmpedt","vBMPEDT",51,0,"px",17,"px","e213o2_client","","","Image","");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",52,0,"px",17,"px","e183o2_client","","","Image","");
   Grid1Container.addSingleLineEdit(341,53,"LANCAMENTOCONTABILEMPRESAID","Código Empresa Conta Contábil","","LancamentoContabilEmpresaid","char",0,"px",10,10,"left",null,[],341,"LancamentoContabilEmpresaid",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(67,54,"ITENSLANCAMENTOCONTABILSEQUENC","Itens Lancamento Contabil Sequencia","","ItensLancamentoContabilSequenc","int",0,"px",4,4,"right",null,[],67,"ItensLancamentoContabilSequenc",false,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(167,55,"CONTACONTABILTIPOLANCAMENTO","Tipo de Lançamento","ContaContabilTipoLancamento","char",null,0,false,false,0,"px","");
   Grid1Container.addSingleLineEdit("Noseqdeb",56,"vNOSEQDEB","No Seq Deb","","NoSeqDeb","int",0,"px",4,4,"right",null,[],"Noseqdeb","NoSeqDeb",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(176,57,"EMPRESACONTACONTABILEMPRESAID","Código Empresa Conta Contabil","","EmpresaContaContabilEmpresaId","char",0,"px",10,10,"left",null,[],176,"EmpresaContaContabilEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(227,58,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(69,59,"PESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Contadebid",60,"vCONTADEBID","Código","","ContaDebId","svchar",0,"px",30,30,"left",null,[],"Contadebid","ContaDebId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Pessoadebid",61,"vPESSOADEBID","Código","","PessoaDebId","int",0,"px",7,7,"right",null,[],"Pessoadebid","PessoaDebId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Valorlancamentodeb",62,"vVALORLANCAMENTODEB","Valor Lancamento Deb","","ValorLancamentoDeb","decimal",0,"px",18,18,"right",null,[],"Valorlancamentodeb","ValorLancamentoDeb",false,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.Grid2Container = new gx.grid.grid(this, 3,"WbpLvl3",79,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"hregistrarlancamento",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit(61,80,"LANCAMENTOCONTABILID","NºLancam","","LancamentoContabilId","int",66,"px",8,8,"right",null,[],61,"LancamentoContabilId",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(60,81,"LANCAMENTOCONTABILDATA","Data","","LancamentoContabilData","date",0,"px",10,10,"right",null,[],60,"LancamentoContabilData",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(62,82,"CONTACONTABILID","Conta Contábil","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],62,"ContaContabilId",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(64,83,"CONTACONTABILTRADUTOR","Tradutor","","ContaContabilTradutor","int",0,"px",5,5,"right",null,[],64,"ContaContabilTradutor",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("Contacontabilnome",84,"vCONTACONTABILNOME","Descrição","","ContaContabilNome","svchar",0,"px",33,33,"left",null,[],"Contacontabilnome","ContaContabilNome",true,0,false,false,"SemQuebraGrid",1,"");
   Grid2Container.addSingleLineEdit(63,85,"CONTACONTABILNOME","Descrição da Conta Contabil","","ContaContabilNome","svchar",0,"px",45,45,"left",null,[],63,"ContaContabilNome",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("Historicodescricao",86,"vHISTORICODESCRICAO","Histórico","","HistoricoDescricao","svchar",0,"px",33,33,"left",null,[],"Historicodescricao","HistoricoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid2Container.addSingleLineEdit(66,87,"ITENSLANCAMENTOCONTABILVALOR","Valor","","ItensLancamentoContabilValor","decimal",0,"px",18,18,"right",null,[],66,"ItensLancamentoContabilValor",true,2,false,false,"Attribute",1,"");
   Grid2Container.addBitmap("&Bmpdet","vBMPDET",88,0,"px",17,"px","e223o2_client","","","Image","");
   Grid2Container.addBitmap("&Bmpedt","vBMPEDT",89,0,"px",17,"px","e233o2_client","","","Image","");
   Grid2Container.addBitmap("&Bmpexc","vBMPEXC",90,0,"px",17,"px","e193o2_client","","","Image","");
   Grid2Container.addSingleLineEdit(341,91,"LANCAMENTOCONTABILEMPRESAID","Código Empresa Conta Contábil","","LancamentoContabilEmpresaid","char",0,"px",10,10,"left",null,[],341,"LancamentoContabilEmpresaid",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(67,92,"ITENSLANCAMENTOCONTABILSEQUENC","Itens Lancamento Contabil Sequencia","","ItensLancamentoContabilSequenc","int",0,"px",4,4,"right",null,[],67,"ItensLancamentoContabilSequenc",false,0,false,false,"Attribute",1,"");
   Grid2Container.addComboBox(167,93,"CONTACONTABILTIPOLANCAMENTO","Tipo de Lançamento","ContaContabilTipoLancamento","char",null,0,false,false,0,"px","");
   Grid2Container.addSingleLineEdit("Noseqcre",94,"vNOSEQCRE","No Seq Cre","","NoSeqCre","int",0,"px",4,4,"right",null,[],"Noseqcre","NoSeqCre",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(176,95,"EMPRESACONTACONTABILEMPRESAID","Código Empresa Conta Contabil","","EmpresaContaContabilEmpresaId","char",0,"px",10,10,"left",null,[],176,"EmpresaContaContabilEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(227,96,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(69,97,"PESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("Contacreid",98,"vCONTACREID","Código","","ContaCreId","svchar",0,"px",30,30,"left",null,[],"Contacreid","ContaCreId",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("Pessoacreid",99,"vPESSOACREID","Código","","PessoaCreId","int",0,"px",7,7,"right",null,[],"Pessoacreid","PessoaCreId",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("Valorlancamentocre",100,"vVALORLANCAMENTOCRE","Valor Lancamento Cre","","ValorLancamentoCre","decimal",0,"px",18,18,"right",null,[],"Valorlancamentocre","ValorLancamentoCre",false,2,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE14",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCONTABILDATA",gxz:"ZV15LancamentoContabilData",gxold:"OV15LancamentoContabilData",gxvar:"AV15LancamentoContabilData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILDATA",gx.O.AV15LancamentoContabilData,0)},c2v:function(){gx.O.AV15LancamentoContabilData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCONTABILDATA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOCONTABILID",gxz:"ZV16TransacaoContabilId",gxold:"OV16TransacaoContabilId",gxvar:"AV16TransacaoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TransacaoContabilId=Value},v2z:function(Value){gx.O.ZV16TransacaoContabilId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCONTABILID",gx.O.AV16TransacaoContabilId,0)},c2v:function(){gx.O.AV16TransacaoContabilId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCONTABILID")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREVERSAO",gxz:"ZV46DataReversao",gxold:"OV46DataReversao",gxvar:"AV46DataReversao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46DataReversao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV46DataReversao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREVERSAO",gx.O.AV46DataReversao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV46DataReversao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREVERSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[34]={fld:"TABLE15",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[40]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[42]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:this.Valid_Lancamentocontabilid,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILID",gxz:"Z61LancamentoContabilId",gxold:"O61LancamentoContabilId",gxvar:"A61LancamentoContabilId",ucs:[],op:[43,45,47,55],ip:[43,45,47,55,42,53,44,57],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A61LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z61LancamentoContabilId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILID",row || gx.fn.currentGridRowImpl(41),gx.O.A61LancamentoContabilId,0)},c2v:function(){gx.O.A61LancamentoContabilId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCONTABILID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILDATA",gxz:"Z60LancamentoContabilData",gxold:"O60LancamentoContabilData",gxvar:"A60LancamentoContabilData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A60LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z60LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILDATA",row || gx.fn.currentGridRowImpl(41),gx.O.A60LancamentoContabilData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A60LancamentoContabilData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOCONTABILDATA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:this.Valid_Contacontabilid,isvalid:null,rgrid:[],fld:"CONTACONTABILID",gxz:"Z62ContaContabilId",gxold:"O62ContaContabilId",gxvar:"A62ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A62ContaContabilId=Value},v2z:function(Value){gx.O.Z62ContaContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(41),gx.O.A62ContaContabilId,0)},c2v:function(){gx.O.A62ContaContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILTRADUTOR",gxz:"Z64ContaContabilTradutor",gxold:"O64ContaContabilTradutor",gxvar:"A64ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A64ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.Z64ContaContabilTradutor=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(41),gx.O.A64ContaContabilTradutor,0)},c2v:function(){gx.O.A64ContaContabilTradutor=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:33,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV45ContaContabilNome",gxold:"OV45ContaContabilNome",gxvar:"AV45ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV45ContaContabilNome=Value},v2z:function(Value){gx.O.ZV45ContaContabilNome=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILNOME",row || gx.fn.currentGridRowImpl(41),gx.O.AV45ContaContabilNome,0)},c2v:function(){gx.O.AV45ContaContabilNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACONTABILNOME",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILNOME",gxz:"Z63ContaContabilNome",gxold:"O63ContaContabilNome",gxvar:"A63ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A63ContaContabilNome=Value},v2z:function(Value){gx.O.Z63ContaContabilNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(41),gx.O.A63ContaContabilNome,0)},c2v:function(){gx.O.A63ContaContabilNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:33,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICODESCRICAO",gxz:"ZV17HistoricoDescricao",gxold:"OV17HistoricoDescricao",gxvar:"AV17HistoricoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17HistoricoDescricao=Value},v2z:function(Value){gx.O.ZV17HistoricoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vHISTORICODESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.AV17HistoricoDescricao,0)},c2v:function(){gx.O.AV17HistoricoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vHISTORICODESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCAMENTOCONTABILVALOR",gxz:"Z66ItensLancamentoContabilValor",gxold:"O66ItensLancamentoContabilValor",gxvar:"A66ItensLancamentoContabilValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A66ItensLancamentoContabilValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z66ItensLancamentoContabilValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ITENSLANCAMENTOCONTABILVALOR",row || gx.fn.currentGridRowImpl(41),gx.O.A66ItensLancamentoContabilValor,2,',')},c2v:function(){gx.O.A66ItensLancamentoContabilValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ITENSLANCAMENTOCONTABILVALOR",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDET",gxz:"ZV43bmpDet",gxold:"OV43bmpDet",gxvar:"AV43bmpDet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV43bmpDet=Value},v2z:function(Value){gx.O.ZV43bmpDet=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDET",row || gx.fn.currentGridRowImpl(41),gx.O.AV43bmpDet,gx.O.AV56Bmpdet_GXI)},c2v:function(){gx.O.AV56Bmpdet_GXI=this.val_GXI();gx.O.AV43bmpDet=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDET",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDET_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV56Bmpdet_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEDT",gxz:"ZV24BmpEdt",gxold:"OV24BmpEdt",gxvar:"AV24BmpEdt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24BmpEdt=Value},v2z:function(Value){gx.O.ZV24BmpEdt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEDT",row || gx.fn.currentGridRowImpl(41),gx.O.AV24BmpEdt,gx.O.AV57Bmpedt_GXI)},c2v:function(){gx.O.AV57Bmpedt_GXI=this.val_GXI();gx.O.AV24BmpEdt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEDT",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEDT_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV57Bmpedt_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV27bmpExc",gxold:"OV27bmpExc",gxvar:"AV27bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpExc=Value},v2z:function(Value){gx.O.ZV27bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41),gx.O.AV27bmpExc,gx.O.AV58Bmpexc_GXI)},c2v:function(){gx.O.AV58Bmpexc_GXI=this.val_GXI();gx.O.AV27bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV58Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:this.Valid_Lancamentocontabilempresaid,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILEMPRESAID",gxz:"Z341LancamentoContabilEmpresaid",gxold:"O341LancamentoContabilEmpresaid",gxvar:"A341LancamentoContabilEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A341LancamentoContabilEmpresaid=Value},v2z:function(Value){gx.O.Z341LancamentoContabilEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A341LancamentoContabilEmpresaid,0)},c2v:function(){gx.O.A341LancamentoContabilEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCAMENTOCONTABILSEQUENC",gxz:"Z67ItensLancamentoContabilSequenc",gxold:"O67ItensLancamentoContabilSequenc",gxvar:"A67ItensLancamentoContabilSequenc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A67ItensLancamentoContabilSequenc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z67ItensLancamentoContabilSequenc=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ITENSLANCAMENTOCONTABILSEQUENC",row || gx.fn.currentGridRowImpl(41),gx.O.A67ItensLancamentoContabilSequenc,0)},c2v:function(){gx.O.A67ItensLancamentoContabilSequenc=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ITENSLANCAMENTOCONTABILSEQUENC",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILTIPOLANCAMENTO",gxz:"Z167ContaContabilTipoLancamento",gxold:"O167ContaContabilTipoLancamento",gxvar:"A167ContaContabilTipoLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A167ContaContabilTipoLancamento=Value},v2z:function(Value){gx.O.Z167ContaContabilTipoLancamento=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTACONTABILTIPOLANCAMENTO",row || gx.fn.currentGridRowImpl(41),gx.O.A167ContaContabilTipoLancamento);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A167ContaContabilTipoLancamento=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILTIPOLANCAMENTO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNOSEQDEB",gxz:"ZV29NoSeqDeb",gxold:"OV29NoSeqDeb",gxvar:"AV29NoSeqDeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29NoSeqDeb=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29NoSeqDeb=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNOSEQDEB",row || gx.fn.currentGridRowImpl(41),gx.O.AV29NoSeqDeb,0)},c2v:function(){gx.O.AV29NoSeqDeb=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNOSEQDEB",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:this.Valid_Empresacontacontabilempresaid,isvalid:null,rgrid:[],fld:"EMPRESACONTACONTABILEMPRESAID",gxz:"Z176EmpresaContaContabilEmpresaId",gxold:"O176EmpresaContaContabilEmpresaId",gxvar:"A176EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A176EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.Z176EmpresaContaContabilEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A176EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.A176EmpresaContaContabilEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(41),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCONTADEBID",gxz:"ZV35ContaDebId",gxold:"OV35ContaDebId",gxvar:"AV35ContaDebId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV35ContaDebId=Value},v2z:function(Value){gx.O.ZV35ContaDebId=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTADEBID",row || gx.fn.currentGridRowImpl(41),gx.O.AV35ContaDebId,0)},c2v:function(){gx.O.AV35ContaDebId=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTADEBID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADEBID",gxz:"ZV36PessoaDebId",gxold:"OV36PessoaDebId",gxvar:"AV36PessoaDebId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36PessoaDebId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36PessoaDebId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPESSOADEBID",row || gx.fn.currentGridRowImpl(41),gx.O.AV36PessoaDebId,0)},c2v:function(){gx.O.AV36PessoaDebId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPESSOADEBID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLANCAMENTODEB",gxz:"ZV41ValorLancamentoDeb",gxold:"OV41ValorLancamentoDeb",gxvar:"AV41ValorLancamentoDeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV41ValorLancamentoDeb=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV41ValorLancamentoDeb=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORLANCAMENTODEB",row || gx.fn.currentGridRowImpl(41),gx.O.AV41ValorLancamentoDeb,2,',')},c2v:function(){gx.O.AV41ValorLancamentoDeb=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORLANCAMENTODEB",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[68]={fld:"TABLE17",grid:0};
   GXValidFnc[71]={fld:"TABLE18",grid:0};
   GXValidFnc[75]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[78]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[80]={lvl:3,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:this.Valid_Lancamentocontabilid,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILID",gxz:"Z61LancamentoContabilId",gxold:"O61LancamentoContabilId",gxvar:"A61LancamentoContabilId",ucs:[],op:[43,45,47,55],ip:[43,45,47,55,42,53,44,57],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A61LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z61LancamentoContabilId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILID",row || gx.fn.currentGridRowImpl(79),gx.O.A61LancamentoContabilId,0)},c2v:function(){gx.O.A61LancamentoContabilId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCONTABILID",row || gx.fn.currentGridRowImpl(79),'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:3,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILDATA",gxz:"Z60LancamentoContabilData",gxold:"O60LancamentoContabilData",gxvar:"A60LancamentoContabilData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A60LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z60LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILDATA",row || gx.fn.currentGridRowImpl(79),gx.O.A60LancamentoContabilData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A60LancamentoContabilData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOCONTABILDATA",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[82]={lvl:3,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:this.Valid_Contacontabilid,isvalid:null,rgrid:[],fld:"CONTACONTABILID",gxz:"Z62ContaContabilId",gxold:"O62ContaContabilId",gxvar:"A62ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A62ContaContabilId=Value},v2z:function(Value){gx.O.Z62ContaContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(79),gx.O.A62ContaContabilId,0)},c2v:function(){gx.O.A62ContaContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[83]={lvl:3,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILTRADUTOR",gxz:"Z64ContaContabilTradutor",gxold:"O64ContaContabilTradutor",gxvar:"A64ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A64ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.Z64ContaContabilTradutor=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(79),gx.O.A64ContaContabilTradutor,0)},c2v:function(){gx.O.A64ContaContabilTradutor=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(79),'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:3,type:"svchar",len:33,dec:0,sign:false,ro:0,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV45ContaContabilNome",gxold:"OV45ContaContabilNome",gxvar:"AV45ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV45ContaContabilNome=Value},v2z:function(Value){gx.O.ZV45ContaContabilNome=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILNOME",row || gx.fn.currentGridRowImpl(79),gx.O.AV45ContaContabilNome,0)},c2v:function(){gx.O.AV45ContaContabilNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACONTABILNOME",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[85]={lvl:3,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILNOME",gxz:"Z63ContaContabilNome",gxold:"O63ContaContabilNome",gxvar:"A63ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A63ContaContabilNome=Value},v2z:function(Value){gx.O.Z63ContaContabilNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(79),gx.O.A63ContaContabilNome,0)},c2v:function(){gx.O.A63ContaContabilNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[86]={lvl:3,type:"svchar",len:33,dec:0,sign:false,ro:0,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICODESCRICAO",gxz:"ZV17HistoricoDescricao",gxold:"OV17HistoricoDescricao",gxvar:"AV17HistoricoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17HistoricoDescricao=Value},v2z:function(Value){gx.O.ZV17HistoricoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vHISTORICODESCRICAO",row || gx.fn.currentGridRowImpl(79),gx.O.AV17HistoricoDescricao,0)},c2v:function(){gx.O.AV17HistoricoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vHISTORICODESCRICAO",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[87]={lvl:3,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCAMENTOCONTABILVALOR",gxz:"Z66ItensLancamentoContabilValor",gxold:"O66ItensLancamentoContabilValor",gxvar:"A66ItensLancamentoContabilValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A66ItensLancamentoContabilValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z66ItensLancamentoContabilValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ITENSLANCAMENTOCONTABILVALOR",row || gx.fn.currentGridRowImpl(79),gx.O.A66ItensLancamentoContabilValor,2,',')},c2v:function(){gx.O.A66ItensLancamentoContabilValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ITENSLANCAMENTOCONTABILVALOR",row || gx.fn.currentGridRowImpl(79),'.',',')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:3,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDET",gxz:"ZV43bmpDet",gxold:"OV43bmpDet",gxvar:"AV43bmpDet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV43bmpDet=Value},v2z:function(Value){gx.O.ZV43bmpDet=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDET",row || gx.fn.currentGridRowImpl(79),gx.O.AV43bmpDet,gx.O.AV56Bmpdet_GXI)},c2v:function(){gx.O.AV56Bmpdet_GXI=this.val_GXI();gx.O.AV43bmpDet=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDET",row || gx.fn.currentGridRowImpl(79))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDET_GXI",row || gx.fn.currentGridRowImpl(79))}, gxvar_GXI:'AV56Bmpdet_GXI',nac:gx.falseFn};
   GXValidFnc[89]={lvl:3,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEDT",gxz:"ZV24BmpEdt",gxold:"OV24BmpEdt",gxvar:"AV24BmpEdt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24BmpEdt=Value},v2z:function(Value){gx.O.ZV24BmpEdt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEDT",row || gx.fn.currentGridRowImpl(79),gx.O.AV24BmpEdt,gx.O.AV57Bmpedt_GXI)},c2v:function(){gx.O.AV57Bmpedt_GXI=this.val_GXI();gx.O.AV24BmpEdt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEDT",row || gx.fn.currentGridRowImpl(79))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEDT_GXI",row || gx.fn.currentGridRowImpl(79))}, gxvar_GXI:'AV57Bmpedt_GXI',nac:gx.falseFn};
   GXValidFnc[90]={lvl:3,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV27bmpExc",gxold:"OV27bmpExc",gxvar:"AV27bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpExc=Value},v2z:function(Value){gx.O.ZV27bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(79),gx.O.AV27bmpExc,gx.O.AV58Bmpexc_GXI)},c2v:function(){gx.O.AV58Bmpexc_GXI=this.val_GXI();gx.O.AV27bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(79))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(79))}, gxvar_GXI:'AV58Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[91]={lvl:3,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:this.Valid_Lancamentocontabilempresaid,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILEMPRESAID",gxz:"Z341LancamentoContabilEmpresaid",gxold:"O341LancamentoContabilEmpresaid",gxvar:"A341LancamentoContabilEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A341LancamentoContabilEmpresaid=Value},v2z:function(Value){gx.O.Z341LancamentoContabilEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(79),gx.O.A341LancamentoContabilEmpresaid,0)},c2v:function(){gx.O.A341LancamentoContabilEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[92]={lvl:3,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCAMENTOCONTABILSEQUENC",gxz:"Z67ItensLancamentoContabilSequenc",gxold:"O67ItensLancamentoContabilSequenc",gxvar:"A67ItensLancamentoContabilSequenc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A67ItensLancamentoContabilSequenc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z67ItensLancamentoContabilSequenc=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ITENSLANCAMENTOCONTABILSEQUENC",row || gx.fn.currentGridRowImpl(79),gx.O.A67ItensLancamentoContabilSequenc,0)},c2v:function(){gx.O.A67ItensLancamentoContabilSequenc=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ITENSLANCAMENTOCONTABILSEQUENC",row || gx.fn.currentGridRowImpl(79),'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:3,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILTIPOLANCAMENTO",gxz:"Z167ContaContabilTipoLancamento",gxold:"O167ContaContabilTipoLancamento",gxvar:"A167ContaContabilTipoLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A167ContaContabilTipoLancamento=Value},v2z:function(Value){gx.O.Z167ContaContabilTipoLancamento=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTACONTABILTIPOLANCAMENTO",row || gx.fn.currentGridRowImpl(79),gx.O.A167ContaContabilTipoLancamento);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A167ContaContabilTipoLancamento=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILTIPOLANCAMENTO",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[94]={lvl:3,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vNOSEQCRE",gxz:"ZV30NoSeqCre",gxold:"OV30NoSeqCre",gxvar:"AV30NoSeqCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30NoSeqCre=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30NoSeqCre=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNOSEQCRE",row || gx.fn.currentGridRowImpl(79),gx.O.AV30NoSeqCre,0)},c2v:function(){gx.O.AV30NoSeqCre=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNOSEQCRE",row || gx.fn.currentGridRowImpl(79),'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:3,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:this.Valid_Empresacontacontabilempresaid,isvalid:null,rgrid:[],fld:"EMPRESACONTACONTABILEMPRESAID",gxz:"Z176EmpresaContaContabilEmpresaId",gxold:"O176EmpresaContaContabilEmpresaId",gxvar:"A176EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A176EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.Z176EmpresaContaContabilEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(79),gx.O.A176EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.A176EmpresaContaContabilEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[96]={lvl:3,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(79),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[97]={lvl:3,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(79),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(79),'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:3,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACREID",gxz:"ZV37ContaCreId",gxold:"OV37ContaCreId",gxvar:"AV37ContaCreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37ContaCreId=Value},v2z:function(Value){gx.O.ZV37ContaCreId=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACREID",row || gx.fn.currentGridRowImpl(79),gx.O.AV37ContaCreId,0)},c2v:function(){gx.O.AV37ContaCreId=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACREID",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[99]={lvl:3,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACREID",gxz:"ZV38PessoaCreId",gxold:"OV38PessoaCreId",gxvar:"AV38PessoaCreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV38PessoaCreId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38PessoaCreId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPESSOACREID",row || gx.fn.currentGridRowImpl(79),gx.O.AV38PessoaCreId,0)},c2v:function(){gx.O.AV38PessoaCreId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPESSOACREID",row || gx.fn.currentGridRowImpl(79),'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:3,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:79,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLANCAMENTOCRE",gxz:"ZV42ValorLancamentoCre",gxold:"OV42ValorLancamentoCre",gxvar:"AV42ValorLancamentoCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV42ValorLancamentoCre=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV42ValorLancamentoCre=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORLANCAMENTOCRE",row || gx.fn.currentGridRowImpl(79),gx.O.AV42ValorLancamentoCre,2,',')},c2v:function(){gx.O.AV42ValorLancamentoCre=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORLANCAMENTOCRE",row || gx.fn.currentGridRowImpl(79),'.',',')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[104]={fld:"TABLE16",grid:0};
   GXValidFnc[107]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORDEBITO",gxz:"ZV31ValorDebito",gxold:"OV31ValorDebito",gxvar:"AV31ValorDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ValorDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV31ValorDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORDEBITO",gx.O.AV31ValorDebito,2,',')},c2v:function(){gx.O.AV31ValorDebito=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORDEBITO",'.',',')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCREDITO",gxz:"ZV32ValorCredito",gxold:"OV32ValorCredito",gxvar:"AV32ValorCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ValorCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV32ValorCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCREDITO",gx.O.AV32ValorCredito,2,',')},c2v:function(){gx.O.AV32ValorCredito=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCREDITO",'.',',')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORDIFERENCA",gxz:"ZV28ValorDiferenca",gxold:"OV28ValorDiferenca",gxvar:"AV28ValorDiferenca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ValorDiferenca=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV28ValorDiferenca=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORDIFERENCA",gx.O.AV28ValorDiferenca,2,',')},c2v:function(){gx.O.AV28ValorDiferenca=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORDIFERENCA",'.',',')},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOVALOR",gxz:"ZV33TipoValor",gxold:"OV33TipoValor",gxvar:"AV33TipoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33TipoValor=Value},v2z:function(Value){gx.O.ZV33TipoValor=Value},v2c:function(){gx.fn.setControlValue("vTIPOVALOR",gx.O.AV33TipoValor,0)},c2v:function(){gx.O.AV33TipoValor=this.val()},val:function(){return gx.fn.getControlValue("vTIPOVALOR")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TABLE4",grid:0};
   GXValidFnc[132]={fld:"BTNHELP",grid:0};
   GXValidFnc[133]={fld:"JS", format:2,grid:0};
   GXValidFnc[134]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV51AcessoSistemaSequencia",gxold:"OV51AcessoSistemaSequencia",gxvar:"AV51AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV51AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV51AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[135]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNHABILITADO",gxz:"ZV26SnHabilitado",gxold:"OV26SnHabilitado",gxvar:"AV26SnHabilitado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26SnHabilitado=Value},v2z:function(Value){gx.O.ZV26SnHabilitado=Value},v2c:function(){gx.fn.setControlValue("vSNHABILITADO",gx.O.AV26SnHabilitado,0)},c2v:function(){gx.O.AV26SnHabilitado=this.val()},val:function(){return gx.fn.getControlValue("vSNHABILITADO")},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOTCONTABIL",gxz:"ZV22EmpresaPadraoTContabil",gxold:"OV22EmpresaPadraoTContabil",gxvar:"AV22EmpresaPadraoTContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22EmpresaPadraoTContabil=Value},v2z:function(Value){gx.O.ZV22EmpresaPadraoTContabil=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOTCONTABIL",gx.O.AV22EmpresaPadraoTContabil,0)},c2v:function(){gx.O.AV22EmpresaPadraoTContabil=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOTCONTABIL")},nac:gx.falseFn};
   GXValidFnc[137]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container],fld:"vLANCAMENTOCONTABILID",gxz:"ZV23LancamentoContabilId",gxold:"OV23LancamentoContabilId",gxvar:"AV23LancamentoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23LancamentoContabilId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILID",gx.O.AV23LancamentoContabilId,0)},c2v:function(){gx.O.AV23LancamentoContabilId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCONTABILID",'.')},nac:gx.falseFn};
   GXValidFnc[138]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNORELATOR",gxz:"ZV49NoRelator",gxold:"OV49NoRelator",gxvar:"AV49NoRelator",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49NoRelator=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49NoRelator=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNORELATOR",gx.O.AV49NoRelator,0)},c2v:function(){gx.O.AV49NoRelator=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNORELATOR",'.')},nac:gx.falseFn};
   GXValidFnc[139]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFECHAR",gxz:"ZV50SnFechar",gxold:"OV50SnFechar",gxvar:"AV50SnFechar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50SnFechar=Value},v2z:function(Value){gx.O.ZV50SnFechar=Value},v2c:function(){gx.fn.setControlValue("vSNFECHAR",gx.O.AV50SnFechar,0)},c2v:function(){gx.O.AV50SnFechar=this.val()},val:function(){return gx.fn.getControlValue("vSNFECHAR")},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container],fld:"vLANCAMENTOCONTABILESTORNO",gxz:"ZV34LancamentoContabilEstorno",gxold:"OV34LancamentoContabilEstorno",gxvar:"AV34LancamentoContabilEstorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34LancamentoContabilEstorno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34LancamentoContabilEstorno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILESTORNO",gx.O.AV34LancamentoContabilEstorno,0)},c2v:function(){gx.O.AV34LancamentoContabilEstorno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCONTABILESTORNO",'.')},nac:gx.falseFn};
   GXValidFnc[141]={fld:"PROMPT_TRANSACAOCONTABILID",grid:0};
   this.AV15LancamentoContabilData = gx.date.nullDate() ;
   this.ZV15LancamentoContabilData = gx.date.nullDate() ;
   this.OV15LancamentoContabilData = gx.date.nullDate() ;
   this.AV16TransacaoContabilId = "" ;
   this.ZV16TransacaoContabilId = "" ;
   this.OV16TransacaoContabilId = "" ;
   this.AV46DataReversao = gx.date.nullDate() ;
   this.ZV46DataReversao = gx.date.nullDate() ;
   this.OV46DataReversao = gx.date.nullDate() ;
   this.Z61LancamentoContabilId = 0 ;
   this.O61LancamentoContabilId = 0 ;
   this.Z60LancamentoContabilData = gx.date.nullDate() ;
   this.O60LancamentoContabilData = gx.date.nullDate() ;
   this.Z62ContaContabilId = "" ;
   this.O62ContaContabilId = "" ;
   this.Z64ContaContabilTradutor = 0 ;
   this.O64ContaContabilTradutor = 0 ;
   this.ZV45ContaContabilNome = "" ;
   this.OV45ContaContabilNome = "" ;
   this.Z63ContaContabilNome = "" ;
   this.O63ContaContabilNome = "" ;
   this.ZV17HistoricoDescricao = "" ;
   this.OV17HistoricoDescricao = "" ;
   this.Z66ItensLancamentoContabilValor = 0 ;
   this.O66ItensLancamentoContabilValor = 0 ;
   this.ZV43bmpDet = "" ;
   this.OV43bmpDet = "" ;
   this.ZV24BmpEdt = "" ;
   this.OV24BmpEdt = "" ;
   this.ZV27bmpExc = "" ;
   this.OV27bmpExc = "" ;
   this.Z341LancamentoContabilEmpresaid = "" ;
   this.O341LancamentoContabilEmpresaid = "" ;
   this.Z67ItensLancamentoContabilSequenc = 0 ;
   this.O67ItensLancamentoContabilSequenc = 0 ;
   this.Z167ContaContabilTipoLancamento = "" ;
   this.O167ContaContabilTipoLancamento = "" ;
   this.ZV29NoSeqDeb = 0 ;
   this.OV29NoSeqDeb = 0 ;
   this.Z176EmpresaContaContabilEmpresaId = "" ;
   this.O176EmpresaContaContabilEmpresaId = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.ZV35ContaDebId = "" ;
   this.OV35ContaDebId = "" ;
   this.ZV36PessoaDebId = 0 ;
   this.OV36PessoaDebId = 0 ;
   this.ZV41ValorLancamentoDeb = 0 ;
   this.OV41ValorLancamentoDeb = 0 ;
   this.ZV30NoSeqCre = 0 ;
   this.OV30NoSeqCre = 0 ;
   this.ZV37ContaCreId = "" ;
   this.OV37ContaCreId = "" ;
   this.ZV38PessoaCreId = 0 ;
   this.OV38PessoaCreId = 0 ;
   this.ZV42ValorLancamentoCre = 0 ;
   this.OV42ValorLancamentoCre = 0 ;
   this.AV31ValorDebito = 0 ;
   this.ZV31ValorDebito = 0 ;
   this.OV31ValorDebito = 0 ;
   this.AV32ValorCredito = 0 ;
   this.ZV32ValorCredito = 0 ;
   this.OV32ValorCredito = 0 ;
   this.AV28ValorDiferenca = 0 ;
   this.ZV28ValorDiferenca = 0 ;
   this.OV28ValorDiferenca = 0 ;
   this.AV33TipoValor = "" ;
   this.ZV33TipoValor = "" ;
   this.OV33TipoValor = "" ;
   this.AV51AcessoSistemaSequencia = 0 ;
   this.ZV51AcessoSistemaSequencia = 0 ;
   this.OV51AcessoSistemaSequencia = 0 ;
   this.AV26SnHabilitado = "" ;
   this.ZV26SnHabilitado = "" ;
   this.OV26SnHabilitado = "" ;
   this.AV22EmpresaPadraoTContabil = "" ;
   this.ZV22EmpresaPadraoTContabil = "" ;
   this.OV22EmpresaPadraoTContabil = "" ;
   this.AV23LancamentoContabilId = 0 ;
   this.ZV23LancamentoContabilId = 0 ;
   this.OV23LancamentoContabilId = 0 ;
   this.AV49NoRelator = 0 ;
   this.ZV49NoRelator = 0 ;
   this.OV49NoRelator = 0 ;
   this.AV50SnFechar = "" ;
   this.ZV50SnFechar = "" ;
   this.OV50SnFechar = "" ;
   this.AV34LancamentoContabilEstorno = 0 ;
   this.ZV34LancamentoContabilEstorno = 0 ;
   this.OV34LancamentoContabilEstorno = 0 ;
   this.AV15LancamentoContabilData = gx.date.nullDate() ;
   this.AV16TransacaoContabilId = "" ;
   this.AV46DataReversao = gx.date.nullDate() ;
   this.A61LancamentoContabilId = 0 ;
   this.A60LancamentoContabilData = gx.date.nullDate() ;
   this.A62ContaContabilId = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.AV45ContaContabilNome = "" ;
   this.A63ContaContabilNome = "" ;
   this.AV17HistoricoDescricao = "" ;
   this.A66ItensLancamentoContabilValor = 0 ;
   this.AV43bmpDet = "" ;
   this.AV24BmpEdt = "" ;
   this.AV27bmpExc = "" ;
   this.A341LancamentoContabilEmpresaid = "" ;
   this.A67ItensLancamentoContabilSequenc = 0 ;
   this.A167ContaContabilTipoLancamento = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.AV31ValorDebito = 0 ;
   this.AV32ValorCredito = 0 ;
   this.AV28ValorDiferenca = 0 ;
   this.AV33TipoValor = "" ;
   this.AV51AcessoSistemaSequencia = 0 ;
   this.AV26SnHabilitado = "" ;
   this.AV22EmpresaPadraoTContabil = "" ;
   this.AV23LancamentoContabilId = 0 ;
   this.AV49NoRelator = 0 ;
   this.AV50SnFechar = "" ;
   this.AV34LancamentoContabilEstorno = 0 ;
   this.A281HistoricoDescricao = "" ;
   this.A336ItensLancamentoContabilHistori = "" ;
   this.A68ItensLancamentoContabilDebCre = "" ;
   this.A337ItensLancamentoContabilParDob = 0 ;
   this.A283EmpresaHistoricoEmpresaId = "" ;
   this.A284HistoricoId = 0 ;
   this.AV29NoSeqDeb = 0 ;
   this.AV35ContaDebId = "" ;
   this.AV36PessoaDebId = 0 ;
   this.AV41ValorLancamentoDeb = 0 ;
   this.AV30NoSeqCre = 0 ;
   this.AV37ContaCreId = "" ;
   this.AV38PessoaCreId = 0 ;
   this.AV42ValorLancamentoCre = 0 ;
   this.AV10EmpresaPadrao = "" ;
   this.AV54Pgmname = "" ;
   this.Events = {"e143o2_client": ["ENTER", true] ,"e123o2_client": ["'FINALIZAR'", true] ,"e183o2_client": ["'EXCLUIRDEBITO'", true] ,"e193o2_client": ["'EXCLUIRCREDITO'", true] ,"e133o2_client": ["'INSERIRNOVOITEM'", true] ,"e203o2_client": ["'DETALHARDEBITO'", true] ,"e213o2_client": ["'EDITARDEBITO'", true] ,"e223o2_client": ["'DETALHARCREDITO'", true] ,"e233o2_client": ["'EDITARCREDITO'", true] ,"e113o2_client": ["'FECHAR'", true] ,"e253o2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'}],[{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV33TipoValor',fld:'vTIPOVALOR'},{av:'AV28ValorDiferenca',fld:'vVALORDIFERENCA'},{av:'AV31ValorDebito',fld:'vVALORDEBITO'},{av:'AV32ValorCredito',fld:'vVALORCREDITO'},{av:'gx.fn.getCtrlProperty("vLANCAMENTOCONTABILDATA","Enabled")',ctrl:'vLANCAMENTOCONTABILDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCONTABILID","Enabled")',ctrl:'vTRANSACAOCONTABILID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREVERSAO","Enabled")',ctrl:'vDATAREVERSAO',prop:'Enabled'},{ctrl:'IMGNOVITEM',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Visible'},{ctrl:'IMGNOVLANC',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Jsonclick'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV44QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'}],[{av:'AV17HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV45ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV43bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV24BmpEdt',fld:'vBMPEDT'},{av:'gx.fn.getCtrlProperty("vBMPEDT","Tooltiptext")',ctrl:'vBMPEDT',prop:'Tooltiptext'},{av:'AV27bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEDT","Link")',ctrl:'vBMPEDT',prop:'Link'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV29NoSeqDeb',fld:'vNOSEQDEB'},{av:'AV35ContaDebId',fld:'vCONTADEBID'},{av:'AV36PessoaDebId',fld:'vPESSOADEBID'},{av:'AV41ValorLancamentoDeb',fld:'vVALORLANCAMENTODEB'}]];
   this.EvtParms["GRID2.LOAD"] = [[{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'}],[{av:'AV17HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV45ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV43bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV27bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV24BmpEdt',fld:'vBMPEDT'},{av:'gx.fn.getCtrlProperty("vBMPEDT","Tooltiptext")',ctrl:'vBMPEDT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEDT","Link")',ctrl:'vBMPEDT',prop:'Link'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV30NoSeqCre',fld:'vNOSEQCRE'},{av:'AV37ContaCreId',fld:'vCONTACREID'},{av:'AV38PessoaCreId',fld:'vPESSOACREID'},{av:'AV42ValorLancamentoCre',fld:'vVALORLANCAMENTOCRE'}]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV50SnFechar',fld:'vSNFECHAR'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV15LancamentoContabilData',fld:'vLANCAMENTOCONTABILDATA'},{av:'AV16TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV22EmpresaPadraoTContabil',fld:'vEMPRESAPADRAOTCONTABIL'},{av:'AV46DataReversao',fld:'vDATAREVERSAO'}],[{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV8MsgErro',fld:'vMSGERRO'},{av:'AV48TransacaoContabilTipo',fld:'vTRANSACAOCONTABILTIPO'},{av:'AV19TransacaoContabilDescricao',fld:'vTRANSACAOCONTABILDESCRICAO'},{ctrl:'IMGNOVLANC',prop:'Visible'},{ctrl:'IMGNOVITEM',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Visible'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'gx.fn.getCtrlProperty("vLANCAMENTOCONTABILDATA","Enabled")',ctrl:'vLANCAMENTOCONTABILDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCONTABILID","Enabled")',ctrl:'vTRANSACAOCONTABILID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREVERSAO","Enabled")',ctrl:'vDATAREVERSAO',prop:'Enabled'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'}]];
   this.EvtParms["'FINALIZAR'"] = [[{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV50SnFechar',fld:'vSNFECHAR'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV44QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'gx.fn.getCtrlProperty("vDATAREVERSAO","Enabled")',ctrl:'vDATAREVERSAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLANCAMENTOCONTABILDATA","Enabled")',ctrl:'vLANCAMENTOCONTABILDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCONTABILID","Enabled")',ctrl:'vTRANSACAOCONTABILID',prop:'Enabled'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV49NoRelator',fld:'vNORELATOR'}]];
   this.EvtParms["'EXCLUIRDEBITO'"] = [[{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV15LancamentoContabilData',fld:'vLANCAMENTOCONTABILDATA'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV29NoSeqDeb',fld:'vNOSEQDEB'},{av:'AV39EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV35ContaDebId',fld:'vCONTADEBID'},{av:'AV40EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'AV36PessoaDebId',fld:'vPESSOADEBID'},{av:'AV41ValorLancamentoDeb',fld:'vVALORLANCAMENTODEB'},{av:'AV5UsrCod',fld:'vUSRCOD'}],[{av:'AV29NoSeqDeb',fld:'vNOSEQDEB'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'}]];
   this.EvtParms["'EXCLUIRCREDITO'"] = [[{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV15LancamentoContabilData',fld:'vLANCAMENTOCONTABILDATA'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV30NoSeqCre',fld:'vNOSEQCRE'},{av:'AV39EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV37ContaCreId',fld:'vCONTACREID'},{av:'AV40EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'AV38PessoaCreId',fld:'vPESSOACREID'},{av:'AV42ValorLancamentoCre',fld:'vVALORLANCAMENTOCRE'},{av:'AV5UsrCod',fld:'vUSRCOD'}],[{av:'AV30NoSeqCre',fld:'vNOSEQCRE'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'}]];
   this.EvtParms["'INSERIRNOVOITEM'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV15LancamentoContabilData',fld:'vLANCAMENTOCONTABILDATA'},{av:'AV16TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV46DataReversao',fld:'vDATAREVERSAO'}],[{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'}]];
   this.EvtParms["'DETALHARDEBITO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'}],[{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'EDITARDEBITO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV15LancamentoContabilData',fld:'vLANCAMENTOCONTABILDATA'},{av:'AV16TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'A337ItensLancamentoContabilParDob',fld:'ITENSLANCAMENTOCONTABILPARDOB'},{av:'AV46DataReversao',fld:'vDATAREVERSAO'}],[{av:'A337ItensLancamentoContabilParDob',fld:'ITENSLANCAMENTOCONTABILPARDOB'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'}]];
   this.EvtParms["'DETALHARCREDITO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'}],[{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'EDITARCREDITO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV15LancamentoContabilData',fld:'vLANCAMENTOCONTABILDATA'},{av:'AV16TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'A337ItensLancamentoContabilParDob',fld:'ITENSLANCAMENTOCONTABILPARDOB'},{av:'AV46DataReversao',fld:'vDATAREVERSAO'}],[{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A337ItensLancamentoContabilParDob',fld:'ITENSLANCAMENTOCONTABILPARDOB'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'}],[{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV33TipoValor',fld:'vTIPOVALOR'},{av:'AV28ValorDiferenca',fld:'vVALORDIFERENCA'},{av:'AV31ValorDebito',fld:'vVALORDEBITO'},{av:'AV32ValorCredito',fld:'vVALORCREDITO'},{av:'gx.fn.getCtrlProperty("vLANCAMENTOCONTABILDATA","Enabled")',ctrl:'vLANCAMENTOCONTABILDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCONTABILID","Enabled")',ctrl:'vTRANSACAOCONTABILID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREVERSAO","Enabled")',ctrl:'vDATAREVERSAO',prop:'Enabled'},{ctrl:'IMGNOVITEM',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Visible'},{ctrl:'IMGNOVLANC',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Jsonclick'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV44QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'}],[{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV33TipoValor',fld:'vTIPOVALOR'},{av:'AV28ValorDiferenca',fld:'vVALORDIFERENCA'},{av:'AV31ValorDebito',fld:'vVALORDEBITO'},{av:'AV32ValorCredito',fld:'vVALORCREDITO'},{av:'gx.fn.getCtrlProperty("vLANCAMENTOCONTABILDATA","Enabled")',ctrl:'vLANCAMENTOCONTABILDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCONTABILID","Enabled")',ctrl:'vTRANSACAOCONTABILID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREVERSAO","Enabled")',ctrl:'vDATAREVERSAO',prop:'Enabled'},{ctrl:'IMGNOVITEM',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Visible'},{ctrl:'IMGNOVLANC',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Jsonclick'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV44QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'}],[{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV33TipoValor',fld:'vTIPOVALOR'},{av:'AV28ValorDiferenca',fld:'vVALORDIFERENCA'},{av:'AV31ValorDebito',fld:'vVALORDEBITO'},{av:'AV32ValorCredito',fld:'vVALORCREDITO'},{av:'gx.fn.getCtrlProperty("vLANCAMENTOCONTABILDATA","Enabled")',ctrl:'vLANCAMENTOCONTABILDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCONTABILID","Enabled")',ctrl:'vTRANSACAOCONTABILID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREVERSAO","Enabled")',ctrl:'vDATAREVERSAO',prop:'Enabled'},{ctrl:'IMGNOVITEM',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Visible'},{ctrl:'IMGNOVLANC',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Jsonclick'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV44QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'}],[{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV33TipoValor',fld:'vTIPOVALOR'},{av:'AV28ValorDiferenca',fld:'vVALORDIFERENCA'},{av:'AV31ValorDebito',fld:'vVALORDEBITO'},{av:'AV32ValorCredito',fld:'vVALORCREDITO'},{av:'gx.fn.getCtrlProperty("vLANCAMENTOCONTABILDATA","Enabled")',ctrl:'vLANCAMENTOCONTABILDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCONTABILID","Enabled")',ctrl:'vTRANSACAOCONTABILID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREVERSAO","Enabled")',ctrl:'vDATAREVERSAO',prop:'Enabled'},{ctrl:'IMGNOVITEM',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Visible'},{ctrl:'IMGNOVLANC',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Jsonclick'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV44QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'}]];
   this.EvtParms["GRID2_FIRSTPAGE"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'}],[{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV33TipoValor',fld:'vTIPOVALOR'},{av:'AV28ValorDiferenca',fld:'vVALORDIFERENCA'},{av:'AV31ValorDebito',fld:'vVALORDEBITO'},{av:'AV32ValorCredito',fld:'vVALORCREDITO'},{av:'gx.fn.getCtrlProperty("vLANCAMENTOCONTABILDATA","Enabled")',ctrl:'vLANCAMENTOCONTABILDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCONTABILID","Enabled")',ctrl:'vTRANSACAOCONTABILID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREVERSAO","Enabled")',ctrl:'vDATAREVERSAO',prop:'Enabled'},{ctrl:'IMGNOVITEM',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Visible'},{ctrl:'IMGNOVLANC',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Jsonclick'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV44QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'}]];
   this.EvtParms["GRID2_PREVPAGE"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'}],[{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV33TipoValor',fld:'vTIPOVALOR'},{av:'AV28ValorDiferenca',fld:'vVALORDIFERENCA'},{av:'AV31ValorDebito',fld:'vVALORDEBITO'},{av:'AV32ValorCredito',fld:'vVALORCREDITO'},{av:'gx.fn.getCtrlProperty("vLANCAMENTOCONTABILDATA","Enabled")',ctrl:'vLANCAMENTOCONTABILDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCONTABILID","Enabled")',ctrl:'vTRANSACAOCONTABILID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREVERSAO","Enabled")',ctrl:'vDATAREVERSAO',prop:'Enabled'},{ctrl:'IMGNOVITEM',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Visible'},{ctrl:'IMGNOVLANC',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Jsonclick'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV44QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'}]];
   this.EvtParms["GRID2_NEXTPAGE"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'}],[{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV33TipoValor',fld:'vTIPOVALOR'},{av:'AV28ValorDiferenca',fld:'vVALORDIFERENCA'},{av:'AV31ValorDebito',fld:'vVALORDEBITO'},{av:'AV32ValorCredito',fld:'vVALORCREDITO'},{av:'gx.fn.getCtrlProperty("vLANCAMENTOCONTABILDATA","Enabled")',ctrl:'vLANCAMENTOCONTABILDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCONTABILID","Enabled")',ctrl:'vTRANSACAOCONTABILID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREVERSAO","Enabled")',ctrl:'vDATAREVERSAO',prop:'Enabled'},{ctrl:'IMGNOVITEM',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Visible'},{ctrl:'IMGNOVLANC',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Jsonclick'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV44QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'}]];
   this.EvtParms["GRID2_LASTPAGE"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV50SnFechar',fld:'vSNFECHAR'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'},{av:'AV51AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV54Pgmname',fld:'vPGMNAME'}],[{av:'AV23LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV34LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV33TipoValor',fld:'vTIPOVALOR'},{av:'AV28ValorDiferenca',fld:'vVALORDIFERENCA'},{av:'AV31ValorDebito',fld:'vVALORDEBITO'},{av:'AV32ValorCredito',fld:'vVALORCREDITO'},{av:'gx.fn.getCtrlProperty("vLANCAMENTOCONTABILDATA","Enabled")',ctrl:'vLANCAMENTOCONTABILDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCONTABILID","Enabled")',ctrl:'vTRANSACAOCONTABILID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREVERSAO","Enabled")',ctrl:'vDATAREVERSAO',prop:'Enabled'},{ctrl:'IMGNOVITEM',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Visible'},{ctrl:'IMGNOVLANC',prop:'Visible'},{ctrl:'IMGFINLANC',prop:'Jsonclick'},{av:'AV49NoRelator',fld:'vNORELATOR'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV44QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV26SnHabilitado',fld:'vSNHABILITADO'}]];
   this.setPrompt("PROMPT_TRANSACAOCONTABILID", [18]);
   this.EnterCtrl = ["IMGNOVLANC"];
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV54Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A281HistoricoDescricao", "HISTORICODESCRICAO", 0, "svchar");
   this.setVCMap("A336ItensLancamentoContabilHistori", "ITENSLANCAMENTOCONTABILHISTORI", 0, "svchar");
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV54Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A281HistoricoDescricao", "HISTORICODESCRICAO", 0, "svchar");
   this.setVCMap("A336ItensLancamentoContabilHistori", "ITENSLANCAMENTOCONTABILHISTORI", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[137]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[140]);
   Grid1Container.addRefreshingVar({rfrVar:"AV10EmpresaPadrao"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[139]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[135]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[134]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[138]);
   Grid1Container.addRefreshingVar({rfrVar:"AV54Pgmname"});
   Grid1Container.addRefreshingVar({rfrVar:"A281HistoricoDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A336ItensLancamentoContabilHistori"});
   Grid1Container.addRefreshingVar({rfrVar:"A63ContaContabilNome", rfrProp:"Value", gxAttId:"63"});
   Grid1Container.addRefreshingVar({rfrVar:"A61LancamentoContabilId", rfrProp:"Value", gxAttId:"61"});
   Grid1Container.addRefreshingVar({rfrVar:"A67ItensLancamentoContabilSequenc", rfrProp:"Value", gxAttId:"67"});
   Grid1Container.addRefreshingVar({rfrVar:"A62ContaContabilId", rfrProp:"Value", gxAttId:"62"});
   Grid1Container.addRefreshingVar({rfrVar:"A69PessoaId", rfrProp:"Value", gxAttId:"69"});
   Grid1Container.addRefreshingVar({rfrVar:"A66ItensLancamentoContabilValor", rfrProp:"Value", gxAttId:"66"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[137]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[140]);
   Grid2Container.addRefreshingVar({rfrVar:"AV10EmpresaPadrao"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[139]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[135]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[134]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[138]);
   Grid2Container.addRefreshingVar({rfrVar:"AV54Pgmname"});
   Grid2Container.addRefreshingVar({rfrVar:"A281HistoricoDescricao"});
   Grid2Container.addRefreshingVar({rfrVar:"A336ItensLancamentoContabilHistori"});
   Grid2Container.addRefreshingVar({rfrVar:"A63ContaContabilNome", rfrProp:"Value", gxAttId:"63"});
   Grid2Container.addRefreshingVar({rfrVar:"A61LancamentoContabilId", rfrProp:"Value", gxAttId:"61"});
   Grid2Container.addRefreshingVar({rfrVar:"A67ItensLancamentoContabilSequenc", rfrProp:"Value", gxAttId:"67"});
   Grid2Container.addRefreshingVar({rfrVar:"A62ContaContabilId", rfrProp:"Value", gxAttId:"62"});
   Grid2Container.addRefreshingVar({rfrVar:"A69PessoaId", rfrProp:"Value", gxAttId:"69"});
   Grid2Container.addRefreshingVar({rfrVar:"A66ItensLancamentoContabilValor", rfrProp:"Value", gxAttId:"66"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarlancamento());
