/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:48:46.68
*/
gx.evt.autoSkip = false;
gx.define('gx0o95', false, function () {
   this.ServerClass =  "gx0o95" ;
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
      this.AV8pFaturamentoProdutoEmpId=gx.fn.getControlValue("vPFATURAMENTOPRODUTOEMPID") ;
      this.AV9pFaturamentoProdutoId=gx.fn.getIntegerValue("vPFATURAMENTOPRODUTOID",'.') ;
      this.AV10pFaturamentoCombinacao=gx.fn.getControlValue("vPFATURAMENTOCOMBINACAO") ;
      this.AV11pFaturamentoNumero=gx.fn.getIntegerValue("vPFATURAMENTONUMERO",'.') ;
      this.AV12pFaturamentoValorUnitario=gx.fn.getDecimalValue("vPFATURAMENTOVALORUNITARIO",'.',',') ;
      this.AV13pFaturamentoSaidaEmpId=gx.fn.getControlValue("vPFATURAMENTOSAIDAEMPID") ;
      this.AV14pFaturamentoSaidaId=gx.fn.getIntegerValue("vPFATURAMENTOSAIDAID",'.') ;
      this.AV15pFaturamentoSaidaItemSeq=gx.fn.getIntegerValue("vPFATURAMENTOSAIDAITEMSEQ",'.') ;
   };
   this.e132hd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142hd1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,29,30,31,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0o95",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11775,28,"FATURAMENTOSAIDAEMPID","Empresa","","FaturamentoSaidaEmpId","char",0,"px",10,10,"left",null,[],11775,"FaturamentoSaidaEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11776,29,"FATURAMENTOSAIDAID","Saída","","FaturamentoSaidaId","int",0,"px",10,10,"right",null,[],11776,"FaturamentoSaidaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11777,30,"FATURAMENTOSAIDAITEMSEQ","Item","Selecionar","FaturamentoSaidaItemSeq","int",0,"px",6,6,"right",null,[],11777,"FaturamentoSaidaItemSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11767,31,"FATURAMENTOPRODUTOEMPID","Empresa","","FaturamentoProdutoEmpId","char",0,"px",10,10,"left",null,[],11767,"FaturamentoProdutoEmpId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11768,32,"FATURAMENTOPRODUTOID","Produto","","FaturamentoProdutoId","int",0,"px",10,10,"right",null,[],11768,"FaturamentoProdutoId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11769,33,"FATURAMENTOCOMBINACAO","Combinação","","FaturamentoCombinacao","char",0,"px",20,20,"left",null,[],11769,"FaturamentoCombinacao",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11770,34,"FATURAMENTONUMERO","Faturamento Numero","","FaturamentoNumero","int",0,"px",10,10,"right",null,[],11770,"FaturamentoNumero",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11771,35,"FATURAMENTOVALORUNITARIO","Valor unitário","","FaturamentoValorUnitario","decimal",0,"px",21,21,"right",null,[],11771,"FaturamentoValorUnitario",false,4,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKFATURAMENTOSAIDAEMPID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFATURAMENTOSAIDAEMPID",gxz:"ZV6cFaturamentoSaidaEmpId",gxold:"OV6cFaturamentoSaidaEmpId",gxvar:"AV6cFaturamentoSaidaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cFaturamentoSaidaEmpId=Value},v2z:function(Value){gx.O.ZV6cFaturamentoSaidaEmpId=Value},v2c:function(){gx.fn.setControlValue("vCFATURAMENTOSAIDAEMPID",gx.O.AV6cFaturamentoSaidaEmpId,0)},c2v:function(){gx.O.AV6cFaturamentoSaidaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCFATURAMENTOSAIDAEMPID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFATURAMENTOSAIDAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFATURAMENTOSAIDAID",gxz:"ZV7cFaturamentoSaidaId",gxold:"OV7cFaturamentoSaidaId",gxvar:"AV7cFaturamentoSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFaturamentoSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cFaturamentoSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFATURAMENTOSAIDAID",gx.O.AV7cFaturamentoSaidaId,0)},c2v:function(){gx.O.AV7cFaturamentoSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFATURAMENTOSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"GROUP2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(26))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOSAIDAEMPID",gxz:"Z11775FaturamentoSaidaEmpId",gxold:"O11775FaturamentoSaidaEmpId",gxvar:"A11775FaturamentoSaidaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11775FaturamentoSaidaEmpId=Value},v2z:function(Value){gx.O.Z11775FaturamentoSaidaEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOSAIDAEMPID",row || gx.fn.currentGridRowImpl(26),gx.O.A11775FaturamentoSaidaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11775FaturamentoSaidaEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("FATURAMENTOSAIDAEMPID",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOSAIDAID",gxz:"Z11776FaturamentoSaidaId",gxold:"O11776FaturamentoSaidaId",gxvar:"A11776FaturamentoSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11776FaturamentoSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11776FaturamentoSaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOSAIDAID",row || gx.fn.currentGridRowImpl(26),gx.O.A11776FaturamentoSaidaId,0)},c2v:function(){gx.O.A11776FaturamentoSaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FATURAMENTOSAIDAID",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOSAIDAITEMSEQ",gxz:"Z11777FaturamentoSaidaItemSeq",gxold:"O11777FaturamentoSaidaItemSeq",gxvar:"A11777FaturamentoSaidaItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11777FaturamentoSaidaItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11777FaturamentoSaidaItemSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOSAIDAITEMSEQ",row || gx.fn.currentGridRowImpl(26),gx.O.A11777FaturamentoSaidaItemSeq,0)},c2v:function(){gx.O.A11777FaturamentoSaidaItemSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FATURAMENTOSAIDAITEMSEQ",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOPRODUTOEMPID",gxz:"Z11767FaturamentoProdutoEmpId",gxold:"O11767FaturamentoProdutoEmpId",gxvar:"A11767FaturamentoProdutoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11767FaturamentoProdutoEmpId=Value},v2z:function(Value){gx.O.Z11767FaturamentoProdutoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOPRODUTOEMPID",row || gx.fn.currentGridRowImpl(26),gx.O.A11767FaturamentoProdutoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11767FaturamentoProdutoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("FATURAMENTOPRODUTOEMPID",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOPRODUTOID",gxz:"Z11768FaturamentoProdutoId",gxold:"O11768FaturamentoProdutoId",gxvar:"A11768FaturamentoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11768FaturamentoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11768FaturamentoProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOPRODUTOID",row || gx.fn.currentGridRowImpl(26),gx.O.A11768FaturamentoProdutoId,0)},c2v:function(){gx.O.A11768FaturamentoProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FATURAMENTOPRODUTOID",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMBINACAO",gxz:"Z11769FaturamentoCombinacao",gxold:"O11769FaturamentoCombinacao",gxvar:"A11769FaturamentoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11769FaturamentoCombinacao=Value},v2z:function(Value){gx.O.Z11769FaturamentoCombinacao=Value},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOCOMBINACAO",row || gx.fn.currentGridRowImpl(26),gx.O.A11769FaturamentoCombinacao,0)},c2v:function(){gx.O.A11769FaturamentoCombinacao=this.val()},val:function(row){return gx.fn.getGridControlValue("FATURAMENTOCOMBINACAO",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTONUMERO",gxz:"Z11770FaturamentoNumero",gxold:"O11770FaturamentoNumero",gxvar:"A11770FaturamentoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11770FaturamentoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11770FaturamentoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTONUMERO",row || gx.fn.currentGridRowImpl(26),gx.O.A11770FaturamentoNumero,0)},c2v:function(){gx.O.A11770FaturamentoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FATURAMENTONUMERO",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOVALORUNITARIO",gxz:"Z11771FaturamentoValorUnitario",gxold:"O11771FaturamentoValorUnitario",gxvar:"A11771FaturamentoValorUnitario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11771FaturamentoValorUnitario=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11771FaturamentoValorUnitario=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("FATURAMENTOVALORUNITARIO",row || gx.fn.currentGridRowImpl(26),gx.O.A11771FaturamentoValorUnitario,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11771FaturamentoValorUnitario=this.val()},val:function(row){return gx.fn.getGridDecimalValue("FATURAMENTOVALORUNITARIO",row || gx.fn.currentGridRowImpl(26),'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cFaturamentoSaidaEmpId = "" ;
   this.ZV6cFaturamentoSaidaEmpId = "" ;
   this.OV6cFaturamentoSaidaEmpId = "" ;
   this.AV7cFaturamentoSaidaId = 0 ;
   this.ZV7cFaturamentoSaidaId = 0 ;
   this.OV7cFaturamentoSaidaId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11775FaturamentoSaidaEmpId = "" ;
   this.O11775FaturamentoSaidaEmpId = "" ;
   this.Z11776FaturamentoSaidaId = 0 ;
   this.O11776FaturamentoSaidaId = 0 ;
   this.Z11777FaturamentoSaidaItemSeq = 0 ;
   this.O11777FaturamentoSaidaItemSeq = 0 ;
   this.Z11767FaturamentoProdutoEmpId = "" ;
   this.O11767FaturamentoProdutoEmpId = "" ;
   this.Z11768FaturamentoProdutoId = 0 ;
   this.O11768FaturamentoProdutoId = 0 ;
   this.Z11769FaturamentoCombinacao = "" ;
   this.O11769FaturamentoCombinacao = "" ;
   this.Z11770FaturamentoNumero = 0 ;
   this.O11770FaturamentoNumero = 0 ;
   this.Z11771FaturamentoValorUnitario = 0 ;
   this.O11771FaturamentoValorUnitario = 0 ;
   this.AV6cFaturamentoSaidaEmpId = "" ;
   this.AV7cFaturamentoSaidaId = 0 ;
   this.AV8pFaturamentoProdutoEmpId = "" ;
   this.AV9pFaturamentoProdutoId = 0 ;
   this.AV10pFaturamentoCombinacao = "" ;
   this.AV11pFaturamentoNumero = 0 ;
   this.AV12pFaturamentoValorUnitario = 0 ;
   this.AV13pFaturamentoSaidaEmpId = "" ;
   this.AV14pFaturamentoSaidaId = 0 ;
   this.AV15pFaturamentoSaidaItemSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A11775FaturamentoSaidaEmpId = "" ;
   this.A11776FaturamentoSaidaId = 0 ;
   this.A11777FaturamentoSaidaItemSeq = 0 ;
   this.A11767FaturamentoProdutoEmpId = "" ;
   this.A11768FaturamentoProdutoId = 0 ;
   this.A11769FaturamentoCombinacao = "" ;
   this.A11770FaturamentoNumero = 0 ;
   this.A11771FaturamentoValorUnitario = 0 ;
   this.Events = {"e132hd2_client": ["ENTER", true] ,"e142hd1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFaturamentoSaidaEmpId',fld:'vCFATURAMENTOSAIDAEMPID'},{av:'AV7cFaturamentoSaidaId',fld:'vCFATURAMENTOSAIDAID'},{av:'AV8pFaturamentoProdutoEmpId',fld:'vPFATURAMENTOPRODUTOEMPID',hsh:true},{av:'AV9pFaturamentoProdutoId',fld:'vPFATURAMENTOPRODUTOID',hsh:true},{av:'AV10pFaturamentoCombinacao',fld:'vPFATURAMENTOCOMBINACAO',hsh:true},{av:'AV11pFaturamentoNumero',fld:'vPFATURAMENTONUMERO',hsh:true},{av:'AV12pFaturamentoValorUnitario',fld:'vPFATURAMENTOVALORUNITARIO',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11775FaturamentoSaidaEmpId',fld:'FATURAMENTOSAIDAEMPID'},{av:'A11776FaturamentoSaidaId',fld:'FATURAMENTOSAIDAID'},{av:'A11777FaturamentoSaidaItemSeq',fld:'FATURAMENTOSAIDAITEMSEQ'}],[{av:'AV13pFaturamentoSaidaEmpId',fld:'vPFATURAMENTOSAIDAEMPID'},{av:'AV14pFaturamentoSaidaId',fld:'vPFATURAMENTOSAIDAID'},{av:'AV15pFaturamentoSaidaItemSeq',fld:'vPFATURAMENTOSAIDAITEMSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFaturamentoSaidaEmpId',fld:'vCFATURAMENTOSAIDAEMPID'},{av:'AV7cFaturamentoSaidaId',fld:'vCFATURAMENTOSAIDAID'},{av:'AV8pFaturamentoProdutoEmpId',fld:'vPFATURAMENTOPRODUTOEMPID',hsh:true},{av:'AV9pFaturamentoProdutoId',fld:'vPFATURAMENTOPRODUTOID',hsh:true},{av:'AV10pFaturamentoCombinacao',fld:'vPFATURAMENTOCOMBINACAO',hsh:true},{av:'AV11pFaturamentoNumero',fld:'vPFATURAMENTONUMERO',hsh:true},{av:'AV12pFaturamentoValorUnitario',fld:'vPFATURAMENTOVALORUNITARIO',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFaturamentoSaidaEmpId',fld:'vCFATURAMENTOSAIDAEMPID'},{av:'AV7cFaturamentoSaidaId',fld:'vCFATURAMENTOSAIDAID'},{av:'AV8pFaturamentoProdutoEmpId',fld:'vPFATURAMENTOPRODUTOEMPID',hsh:true},{av:'AV9pFaturamentoProdutoId',fld:'vPFATURAMENTOPRODUTOID',hsh:true},{av:'AV10pFaturamentoCombinacao',fld:'vPFATURAMENTOCOMBINACAO',hsh:true},{av:'AV11pFaturamentoNumero',fld:'vPFATURAMENTONUMERO',hsh:true},{av:'AV12pFaturamentoValorUnitario',fld:'vPFATURAMENTOVALORUNITARIO',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFaturamentoSaidaEmpId',fld:'vCFATURAMENTOSAIDAEMPID'},{av:'AV7cFaturamentoSaidaId',fld:'vCFATURAMENTOSAIDAID'},{av:'AV8pFaturamentoProdutoEmpId',fld:'vPFATURAMENTOPRODUTOEMPID',hsh:true},{av:'AV9pFaturamentoProdutoId',fld:'vPFATURAMENTOPRODUTOID',hsh:true},{av:'AV10pFaturamentoCombinacao',fld:'vPFATURAMENTOCOMBINACAO',hsh:true},{av:'AV11pFaturamentoNumero',fld:'vPFATURAMENTONUMERO',hsh:true},{av:'AV12pFaturamentoValorUnitario',fld:'vPFATURAMENTOVALORUNITARIO',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFaturamentoSaidaEmpId',fld:'vCFATURAMENTOSAIDAEMPID'},{av:'AV7cFaturamentoSaidaId',fld:'vCFATURAMENTOSAIDAID'},{av:'AV8pFaturamentoProdutoEmpId',fld:'vPFATURAMENTOPRODUTOEMPID',hsh:true},{av:'AV9pFaturamentoProdutoId',fld:'vPFATURAMENTOPRODUTOID',hsh:true},{av:'AV10pFaturamentoCombinacao',fld:'vPFATURAMENTOCOMBINACAO',hsh:true},{av:'AV11pFaturamentoNumero',fld:'vPFATURAMENTONUMERO',hsh:true},{av:'AV12pFaturamentoValorUnitario',fld:'vPFATURAMENTOVALORUNITARIO',hsh:true}],[]];
   this.setVCMap("AV8pFaturamentoProdutoEmpId", "vPFATURAMENTOPRODUTOEMPID", 0, "char");
   this.setVCMap("AV9pFaturamentoProdutoId", "vPFATURAMENTOPRODUTOID", 0, "int");
   this.setVCMap("AV10pFaturamentoCombinacao", "vPFATURAMENTOCOMBINACAO", 0, "char");
   this.setVCMap("AV11pFaturamentoNumero", "vPFATURAMENTONUMERO", 0, "int");
   this.setVCMap("AV12pFaturamentoValorUnitario", "vPFATURAMENTOVALORUNITARIO", 0, "decimal");
   this.setVCMap("AV13pFaturamentoSaidaEmpId", "vPFATURAMENTOSAIDAEMPID", 0, "char");
   this.setVCMap("AV14pFaturamentoSaidaId", "vPFATURAMENTOSAIDAID", 0, "int");
   this.setVCMap("AV15pFaturamentoSaidaItemSeq", "vPFATURAMENTOSAIDAITEMSEQ", 0, "int");
   this.setVCMap("AV8pFaturamentoProdutoEmpId", "vPFATURAMENTOPRODUTOEMPID", 0, "char");
   this.setVCMap("AV9pFaturamentoProdutoId", "vPFATURAMENTOPRODUTOID", 0, "int");
   this.setVCMap("AV10pFaturamentoCombinacao", "vPFATURAMENTOCOMBINACAO", 0, "char");
   this.setVCMap("AV11pFaturamentoNumero", "vPFATURAMENTONUMERO", 0, "int");
   this.setVCMap("AV12pFaturamentoValorUnitario", "vPFATURAMENTOVALORUNITARIO", 0, "decimal");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar({rfrVar:"AV8pFaturamentoProdutoEmpId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV9pFaturamentoProdutoId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV10pFaturamentoCombinacao"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11pFaturamentoNumero"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pFaturamentoValorUnitario"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0o95());
