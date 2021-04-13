/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:9.83
*/
gx.evt.autoSkip = false;
gx.define('gx0mg0', false, function () {
   this.ServerClass =  "gx0mg0" ;
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
      this.AV13pAgrupamentoClientePessoaEmpId=gx.fn.getControlValue("vPAGRUPAMENTOCLIENTEPESSOAEMPID") ;
      this.AV14pAgrupamentoClientePessoaId=gx.fn.getIntegerValue("vPAGRUPAMENTOCLIENTEPESSOAID",'.') ;
   };
   this.e132b92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142b91_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,59];
   this.GXLastCtrlId =59;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0mg0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10997,53,"AGRUPAMENTOCLIENTEPESSOAEMPID","Emp Id","","AgrupamentoClientePessoaEmpId","char",0,"px",10,10,"left",null,[],10997,"AgrupamentoClientePessoaEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10998,54,"AGRUPAMENTOCLIENTEPESSOAID","Pessoa Id","","AgrupamentoClientePessoaId","int",0,"px",7,7,"right",null,[],10998,"AgrupamentoClientePessoaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11005,55,"AGRUPAMENTOCLIENTETRANSPEMPID","Emp Id","","AgrupamentoClienteTranspEmpId","char",0,"px",10,10,"left",null,[],11005,"AgrupamentoClienteTranspEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11006,56,"AGRUPAMENTOCLIENTETRANSPID","Transp Id","","AgrupamentoClienteTranspId","int",0,"px",6,6,"right",null,[],11006,"AgrupamentoClienteTranspId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKAGRUPAMENTOCLIENTEPESSOAEMPID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTOCLIENTEPESSOAEMPID",gxz:"ZV6cAgrupamentoClientePessoaEmpId",gxold:"OV6cAgrupamentoClientePessoaEmpId",gxvar:"AV6cAgrupamentoClientePessoaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cAgrupamentoClientePessoaEmpId=Value},v2z:function(Value){gx.O.ZV6cAgrupamentoClientePessoaEmpId=Value},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTOCLIENTEPESSOAEMPID",gx.O.AV6cAgrupamentoClientePessoaEmpId,0)},c2v:function(){gx.O.AV6cAgrupamentoClientePessoaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCAGRUPAMENTOCLIENTEPESSOAEMPID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKAGRUPAMENTOCLIENTEPESSOAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTOCLIENTEPESSOAID",gxz:"ZV7cAgrupamentoClientePessoaId",gxold:"OV7cAgrupamentoClientePessoaId",gxvar:"AV7cAgrupamentoClientePessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAgrupamentoClientePessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cAgrupamentoClientePessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTOCLIENTEPESSOAID",gx.O.AV7cAgrupamentoClientePessoaId,0)},c2v:function(){gx.O.AV7cAgrupamentoClientePessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAGRUPAMENTOCLIENTEPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKAGRUPAMENTOCLIENTETRANSPEMPID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTOCLIENTETRANSPEMPID",gxz:"ZV8cAgrupamentoClienteTranspEmpId",gxold:"OV8cAgrupamentoClienteTranspEmpId",gxvar:"AV8cAgrupamentoClienteTranspEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cAgrupamentoClienteTranspEmpId=Value},v2z:function(Value){gx.O.ZV8cAgrupamentoClienteTranspEmpId=Value},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTOCLIENTETRANSPEMPID",gx.O.AV8cAgrupamentoClienteTranspEmpId,0)},c2v:function(){gx.O.AV8cAgrupamentoClienteTranspEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCAGRUPAMENTOCLIENTETRANSPEMPID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKAGRUPAMENTOCLIENTETRANSPID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTOCLIENTETRANSPID",gxz:"ZV9cAgrupamentoClienteTranspId",gxold:"OV9cAgrupamentoClienteTranspId",gxvar:"AV9cAgrupamentoClienteTranspId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cAgrupamentoClienteTranspId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cAgrupamentoClienteTranspId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTOCLIENTETRANSPID",gx.O.AV9cAgrupamentoClienteTranspId,0)},c2v:function(){gx.O.AV9cAgrupamentoClienteTranspId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAGRUPAMENTOCLIENTETRANSPID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKAGRUPAMENTOCLIENTETIPOFRETE", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTOCLIENTETIPOFRETE",gxz:"ZV10cAgrupamentoClienteTipoFrete",gxold:"OV10cAgrupamentoClienteTipoFrete",gxvar:"AV10cAgrupamentoClienteTipoFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cAgrupamentoClienteTipoFrete=Value},v2z:function(Value){gx.O.ZV10cAgrupamentoClienteTipoFrete=Value},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTOCLIENTETIPOFRETE",gx.O.AV10cAgrupamentoClienteTipoFrete,0)},c2v:function(){gx.O.AV10cAgrupamentoClienteTipoFrete=this.val()},val:function(){return gx.fn.getControlValue("vCAGRUPAMENTOCLIENTETIPOFRETE")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKAGRUPAMENTOCLIENTEVALORFRETE", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTOCLIENTEVALORFRETE",gxz:"ZV11cAgrupamentoClienteValorFrete",gxold:"OV11cAgrupamentoClienteValorFrete",gxvar:"AV11cAgrupamentoClienteValorFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cAgrupamentoClienteValorFrete=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV11cAgrupamentoClienteValorFrete=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCAGRUPAMENTOCLIENTEVALORFRETE",gx.O.AV11cAgrupamentoClienteValorFrete,2,',')},c2v:function(){gx.O.AV11cAgrupamentoClienteValorFrete=this.val()},val:function(){return gx.fn.getDecimalValue("vCAGRUPAMENTOCLIENTEVALORFRETE",'.',',')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKAGRUPAMENTOCLIENTEFORMAEMPID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTOCLIENTEFORMAEMPID",gxz:"ZV12cAgrupamentoClienteFormaEmpId",gxold:"OV12cAgrupamentoClienteFormaEmpId",gxvar:"AV12cAgrupamentoClienteFormaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cAgrupamentoClienteFormaEmpId=Value},v2z:function(Value){gx.O.ZV12cAgrupamentoClienteFormaEmpId=Value},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTOCLIENTEFORMAEMPID",gx.O.AV12cAgrupamentoClienteFormaEmpId,0)},c2v:function(){gx.O.AV12cAgrupamentoClienteFormaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCAGRUPAMENTOCLIENTEFORMAEMPID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGRUPAMENTOCLIENTEPESSOAEMPID",gxz:"Z10997AgrupamentoClientePessoaEmpId",gxold:"O10997AgrupamentoClientePessoaEmpId",gxvar:"A10997AgrupamentoClientePessoaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10997AgrupamentoClientePessoaEmpId=Value},v2z:function(Value){gx.O.Z10997AgrupamentoClientePessoaEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("AGRUPAMENTOCLIENTEPESSOAEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A10997AgrupamentoClientePessoaEmpId,0)},c2v:function(){gx.O.A10997AgrupamentoClientePessoaEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("AGRUPAMENTOCLIENTEPESSOAEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGRUPAMENTOCLIENTEPESSOAID",gxz:"Z10998AgrupamentoClientePessoaId",gxold:"O10998AgrupamentoClientePessoaId",gxvar:"A10998AgrupamentoClientePessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10998AgrupamentoClientePessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10998AgrupamentoClientePessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AGRUPAMENTOCLIENTEPESSOAID",row || gx.fn.currentGridRowImpl(51),gx.O.A10998AgrupamentoClientePessoaId,0)},c2v:function(){gx.O.A10998AgrupamentoClientePessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AGRUPAMENTOCLIENTEPESSOAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGRUPAMENTOCLIENTETRANSPEMPID",gxz:"Z11005AgrupamentoClienteTranspEmpId",gxold:"O11005AgrupamentoClienteTranspEmpId",gxvar:"A11005AgrupamentoClienteTranspEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11005AgrupamentoClienteTranspEmpId=Value},v2z:function(Value){gx.O.Z11005AgrupamentoClienteTranspEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("AGRUPAMENTOCLIENTETRANSPEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A11005AgrupamentoClienteTranspEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11005AgrupamentoClienteTranspEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("AGRUPAMENTOCLIENTETRANSPEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGRUPAMENTOCLIENTETRANSPID",gxz:"Z11006AgrupamentoClienteTranspId",gxold:"O11006AgrupamentoClienteTranspId",gxvar:"A11006AgrupamentoClienteTranspId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11006AgrupamentoClienteTranspId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11006AgrupamentoClienteTranspId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AGRUPAMENTOCLIENTETRANSPID",row || gx.fn.currentGridRowImpl(51),gx.O.A11006AgrupamentoClienteTranspId,0)},c2v:function(){gx.O.A11006AgrupamentoClienteTranspId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AGRUPAMENTOCLIENTETRANSPID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE4",grid:0};
   this.AV6cAgrupamentoClientePessoaEmpId = "" ;
   this.ZV6cAgrupamentoClientePessoaEmpId = "" ;
   this.OV6cAgrupamentoClientePessoaEmpId = "" ;
   this.AV7cAgrupamentoClientePessoaId = 0 ;
   this.ZV7cAgrupamentoClientePessoaId = 0 ;
   this.OV7cAgrupamentoClientePessoaId = 0 ;
   this.AV8cAgrupamentoClienteTranspEmpId = "" ;
   this.ZV8cAgrupamentoClienteTranspEmpId = "" ;
   this.OV8cAgrupamentoClienteTranspEmpId = "" ;
   this.AV9cAgrupamentoClienteTranspId = 0 ;
   this.ZV9cAgrupamentoClienteTranspId = 0 ;
   this.OV9cAgrupamentoClienteTranspId = 0 ;
   this.AV10cAgrupamentoClienteTipoFrete = "" ;
   this.ZV10cAgrupamentoClienteTipoFrete = "" ;
   this.OV10cAgrupamentoClienteTipoFrete = "" ;
   this.AV11cAgrupamentoClienteValorFrete = 0 ;
   this.ZV11cAgrupamentoClienteValorFrete = 0 ;
   this.OV11cAgrupamentoClienteValorFrete = 0 ;
   this.AV12cAgrupamentoClienteFormaEmpId = "" ;
   this.ZV12cAgrupamentoClienteFormaEmpId = "" ;
   this.OV12cAgrupamentoClienteFormaEmpId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10997AgrupamentoClientePessoaEmpId = "" ;
   this.O10997AgrupamentoClientePessoaEmpId = "" ;
   this.Z10998AgrupamentoClientePessoaId = 0 ;
   this.O10998AgrupamentoClientePessoaId = 0 ;
   this.Z11005AgrupamentoClienteTranspEmpId = "" ;
   this.O11005AgrupamentoClienteTranspEmpId = "" ;
   this.Z11006AgrupamentoClienteTranspId = 0 ;
   this.O11006AgrupamentoClienteTranspId = 0 ;
   this.AV6cAgrupamentoClientePessoaEmpId = "" ;
   this.AV7cAgrupamentoClientePessoaId = 0 ;
   this.AV8cAgrupamentoClienteTranspEmpId = "" ;
   this.AV9cAgrupamentoClienteTranspId = 0 ;
   this.AV10cAgrupamentoClienteTipoFrete = "" ;
   this.AV11cAgrupamentoClienteValorFrete = 0 ;
   this.AV12cAgrupamentoClienteFormaEmpId = "" ;
   this.AV13pAgrupamentoClientePessoaEmpId = "" ;
   this.AV14pAgrupamentoClientePessoaId = 0 ;
   this.A11002AgrupamentoClienteFormaEmpId = "" ;
   this.A11032AgrupamentoClienteValorFrete = 0 ;
   this.A11031AgrupamentoClienteTipoFrete = "" ;
   this.AV5LinkSelection = "" ;
   this.A10997AgrupamentoClientePessoaEmpId = "" ;
   this.A10998AgrupamentoClientePessoaId = 0 ;
   this.A11005AgrupamentoClienteTranspEmpId = "" ;
   this.A11006AgrupamentoClienteTranspId = 0 ;
   this.Events = {"e132b92_client": ["ENTER", true] ,"e142b91_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgrupamentoClientePessoaEmpId',fld:'vCAGRUPAMENTOCLIENTEPESSOAEMPID'},{av:'AV7cAgrupamentoClientePessoaId',fld:'vCAGRUPAMENTOCLIENTEPESSOAID'},{av:'AV8cAgrupamentoClienteTranspEmpId',fld:'vCAGRUPAMENTOCLIENTETRANSPEMPID'},{av:'AV9cAgrupamentoClienteTranspId',fld:'vCAGRUPAMENTOCLIENTETRANSPID'},{av:'AV10cAgrupamentoClienteTipoFrete',fld:'vCAGRUPAMENTOCLIENTETIPOFRETE'},{av:'AV11cAgrupamentoClienteValorFrete',fld:'vCAGRUPAMENTOCLIENTEVALORFRETE'},{av:'AV12cAgrupamentoClienteFormaEmpId',fld:'vCAGRUPAMENTOCLIENTEFORMAEMPID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10997AgrupamentoClientePessoaEmpId',fld:'AGRUPAMENTOCLIENTEPESSOAEMPID'},{av:'A10998AgrupamentoClientePessoaId',fld:'AGRUPAMENTOCLIENTEPESSOAID'}],[{av:'AV13pAgrupamentoClientePessoaEmpId',fld:'vPAGRUPAMENTOCLIENTEPESSOAEMPID'},{av:'AV14pAgrupamentoClientePessoaId',fld:'vPAGRUPAMENTOCLIENTEPESSOAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgrupamentoClientePessoaEmpId',fld:'vCAGRUPAMENTOCLIENTEPESSOAEMPID'},{av:'AV7cAgrupamentoClientePessoaId',fld:'vCAGRUPAMENTOCLIENTEPESSOAID'},{av:'AV8cAgrupamentoClienteTranspEmpId',fld:'vCAGRUPAMENTOCLIENTETRANSPEMPID'},{av:'AV9cAgrupamentoClienteTranspId',fld:'vCAGRUPAMENTOCLIENTETRANSPID'},{av:'AV10cAgrupamentoClienteTipoFrete',fld:'vCAGRUPAMENTOCLIENTETIPOFRETE'},{av:'AV11cAgrupamentoClienteValorFrete',fld:'vCAGRUPAMENTOCLIENTEVALORFRETE'},{av:'AV12cAgrupamentoClienteFormaEmpId',fld:'vCAGRUPAMENTOCLIENTEFORMAEMPID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgrupamentoClientePessoaEmpId',fld:'vCAGRUPAMENTOCLIENTEPESSOAEMPID'},{av:'AV7cAgrupamentoClientePessoaId',fld:'vCAGRUPAMENTOCLIENTEPESSOAID'},{av:'AV8cAgrupamentoClienteTranspEmpId',fld:'vCAGRUPAMENTOCLIENTETRANSPEMPID'},{av:'AV9cAgrupamentoClienteTranspId',fld:'vCAGRUPAMENTOCLIENTETRANSPID'},{av:'AV10cAgrupamentoClienteTipoFrete',fld:'vCAGRUPAMENTOCLIENTETIPOFRETE'},{av:'AV11cAgrupamentoClienteValorFrete',fld:'vCAGRUPAMENTOCLIENTEVALORFRETE'},{av:'AV12cAgrupamentoClienteFormaEmpId',fld:'vCAGRUPAMENTOCLIENTEFORMAEMPID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgrupamentoClientePessoaEmpId',fld:'vCAGRUPAMENTOCLIENTEPESSOAEMPID'},{av:'AV7cAgrupamentoClientePessoaId',fld:'vCAGRUPAMENTOCLIENTEPESSOAID'},{av:'AV8cAgrupamentoClienteTranspEmpId',fld:'vCAGRUPAMENTOCLIENTETRANSPEMPID'},{av:'AV9cAgrupamentoClienteTranspId',fld:'vCAGRUPAMENTOCLIENTETRANSPID'},{av:'AV10cAgrupamentoClienteTipoFrete',fld:'vCAGRUPAMENTOCLIENTETIPOFRETE'},{av:'AV11cAgrupamentoClienteValorFrete',fld:'vCAGRUPAMENTOCLIENTEVALORFRETE'},{av:'AV12cAgrupamentoClienteFormaEmpId',fld:'vCAGRUPAMENTOCLIENTEFORMAEMPID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgrupamentoClientePessoaEmpId',fld:'vCAGRUPAMENTOCLIENTEPESSOAEMPID'},{av:'AV7cAgrupamentoClientePessoaId',fld:'vCAGRUPAMENTOCLIENTEPESSOAID'},{av:'AV8cAgrupamentoClienteTranspEmpId',fld:'vCAGRUPAMENTOCLIENTETRANSPEMPID'},{av:'AV9cAgrupamentoClienteTranspId',fld:'vCAGRUPAMENTOCLIENTETRANSPID'},{av:'AV10cAgrupamentoClienteTipoFrete',fld:'vCAGRUPAMENTOCLIENTETIPOFRETE'},{av:'AV11cAgrupamentoClienteValorFrete',fld:'vCAGRUPAMENTOCLIENTEVALORFRETE'},{av:'AV12cAgrupamentoClienteFormaEmpId',fld:'vCAGRUPAMENTOCLIENTEFORMAEMPID'}],[]];
   this.setVCMap("AV13pAgrupamentoClientePessoaEmpId", "vPAGRUPAMENTOCLIENTEPESSOAEMPID", 0, "char");
   this.setVCMap("AV14pAgrupamentoClientePessoaId", "vPAGRUPAMENTOCLIENTEPESSOAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0mg0());