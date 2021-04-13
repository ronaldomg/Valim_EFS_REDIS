/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:41:51.28
*/
gx.evt.autoSkip = false;
gx.define('gx0hd0', false, function () {
   this.ServerClass =  "gx0hd0" ;
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
      this.AV13pAtoCotepeEmpresaId=gx.fn.getControlValue("vPATOCOTEPEEMPRESAID") ;
      this.AV14pAtoCotepeECF=gx.fn.getIntegerValue("vPATOCOTEPEECF",'.') ;
      this.AV15pAtoCotepeNumeroCOO=gx.fn.getIntegerValue("vPATOCOTEPENUMEROCOO",'.') ;
   };
   this.Validv_Catocotepesncancelamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCATOCOTEPESNCANCELAMENTO");
         this.AnyError  = 0;
         if ( ! ( this.AV10cAtoCotepeSnCancelamento == "N" || this.AV10cAtoCotepeSnCancelamento == "S" || (""==this.AV10cAtoCotepeSnCancelamento) ) )
         {
            try {
               gxballoon.setError("Campo cAtoCotepeSnCancelamento fora do intervalo");
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
   this.e131vd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141vd1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,61,64];
   this.GXLastCtrlId =64;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0hd0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8500,53,"ATOCOTEPEEMPRESAID","Empresa","","AtoCotepeEmpresaId","char",0,"px",10,10,"left",null,[],8500,"AtoCotepeEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8501,54,"ATOCOTEPEECF","ECF","","AtoCotepeECF","int",0,"px",3,3,"right",null,[],8501,"AtoCotepeECF",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8502,55,"ATOCOTEPENUMEROCOO","COO","","AtoCotepeNumeroCOO","int",0,"px",6,6,"right",null,[],8502,"AtoCotepeNumeroCOO",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8498,56,"ATOCOTEPEDATA","Data","Selecionar","AtoCotepeData","date",0,"px",10,10,"right",null,[],8498,"AtoCotepeData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addCheckBox(8499,57,"ATOCOTEPESNCANCELAMENTO","Cancelamento","","AtoCotepeSnCancelamento","char","S","N",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(9126,58,"ATOCOTEPEVALORTOTAL","Valor Total","","AtoCotepeValorTotal","decimal",0,"px",15,15,"right",null,[],9126,"AtoCotepeValorTotal",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9127,59,"ATOCOTEPECPFCNPJ","CPF/CNPJ","","AtoCotepeCPFCNPJ","char",0,"px",14,14,"left",null,[],9127,"AtoCotepeCPFCNPJ",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9310,60,"ATOCOTEPEVALORDESCONTO","Valor Desconto","","AtoCotepeValorDesconto","decimal",0,"px",22,22,"right",null,[],9310,"AtoCotepeValorDesconto",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9311,61,"ATOCOTEPEVALORACRESCIMO","Valor Acréscimo","","AtoCotepeValorAcrescimo","decimal",0,"px",22,22,"right",null,[],9311,"AtoCotepeValorAcrescimo",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKATOCOTEPEEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCATOCOTEPEEMPRESAID",gxz:"ZV6cAtoCotepeEmpresaId",gxold:"OV6cAtoCotepeEmpresaId",gxvar:"AV6cAtoCotepeEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cAtoCotepeEmpresaId=Value},v2z:function(Value){gx.O.ZV6cAtoCotepeEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCATOCOTEPEEMPRESAID",gx.O.AV6cAtoCotepeEmpresaId,0)},c2v:function(){gx.O.AV6cAtoCotepeEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCATOCOTEPEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKATOCOTEPEECF", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCATOCOTEPEECF",gxz:"ZV7cAtoCotepeECF",gxold:"OV7cAtoCotepeECF",gxvar:"AV7cAtoCotepeECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAtoCotepeECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cAtoCotepeECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATOCOTEPEECF",gx.O.AV7cAtoCotepeECF,0)},c2v:function(){gx.O.AV7cAtoCotepeECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATOCOTEPEECF",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKATOCOTEPENUMEROCOO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCATOCOTEPENUMEROCOO",gxz:"ZV8cAtoCotepeNumeroCOO",gxold:"OV8cAtoCotepeNumeroCOO",gxvar:"AV8cAtoCotepeNumeroCOO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cAtoCotepeNumeroCOO=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cAtoCotepeNumeroCOO=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATOCOTEPENUMEROCOO",gx.O.AV8cAtoCotepeNumeroCOO,0)},c2v:function(){gx.O.AV8cAtoCotepeNumeroCOO=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATOCOTEPENUMEROCOO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKATOCOTEPEDATA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCATOCOTEPEDATA",gxz:"ZV9cAtoCotepeData",gxold:"OV9cAtoCotepeData",gxvar:"AV9cAtoCotepeData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cAtoCotepeData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cAtoCotepeData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCATOCOTEPEDATA",gx.O.AV9cAtoCotepeData,0)},c2v:function(){gx.O.AV9cAtoCotepeData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCATOCOTEPEDATA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKATOCOTEPESNCANCELAMENTO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Catocotepesncancelamento,isvalid:null,rgrid:[this.Grid1Container],fld:"vCATOCOTEPESNCANCELAMENTO",gxz:"ZV10cAtoCotepeSnCancelamento",gxold:"OV10cAtoCotepeSnCancelamento",gxvar:"AV10cAtoCotepeSnCancelamento",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV10cAtoCotepeSnCancelamento=Value},v2z:function(Value){gx.O.ZV10cAtoCotepeSnCancelamento=Value},v2c:function(){gx.fn.setCheckBoxValue("vCATOCOTEPESNCANCELAMENTO",gx.O.AV10cAtoCotepeSnCancelamento,"S")},c2v:function(){gx.O.AV10cAtoCotepeSnCancelamento=this.val()},val:function(){return gx.fn.getControlValue("vCATOCOTEPESNCANCELAMENTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={fld:"TEXTBLOCKATOCOTEPEVALORTOTAL", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCATOCOTEPEVALORTOTAL",gxz:"ZV11cAtoCotepeValorTotal",gxold:"OV11cAtoCotepeValorTotal",gxvar:"AV11cAtoCotepeValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cAtoCotepeValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV11cAtoCotepeValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCATOCOTEPEVALORTOTAL",gx.O.AV11cAtoCotepeValorTotal,2,',')},c2v:function(){gx.O.AV11cAtoCotepeValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vCATOCOTEPEVALORTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKATOCOTEPECPFCNPJ", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCATOCOTEPECPFCNPJ",gxz:"ZV12cAtoCotepeCPFCNPJ",gxold:"OV12cAtoCotepeCPFCNPJ",gxvar:"AV12cAtoCotepeCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cAtoCotepeCPFCNPJ=Value},v2z:function(Value){gx.O.ZV12cAtoCotepeCPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("vCATOCOTEPECPFCNPJ",gx.O.AV12cAtoCotepeCPFCNPJ,0)},c2v:function(){gx.O.AV12cAtoCotepeCPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vCATOCOTEPECPFCNPJ")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ATOCOTEPEEMPRESAID",gxz:"Z8500AtoCotepeEmpresaId",gxold:"O8500AtoCotepeEmpresaId",gxvar:"A8500AtoCotepeEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8500AtoCotepeEmpresaId=Value},v2z:function(Value){gx.O.Z8500AtoCotepeEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ATOCOTEPEEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A8500AtoCotepeEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8500AtoCotepeEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ATOCOTEPEEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ATOCOTEPEECF",gxz:"Z8501AtoCotepeECF",gxold:"O8501AtoCotepeECF",gxvar:"A8501AtoCotepeECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8501AtoCotepeECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8501AtoCotepeECF=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ATOCOTEPEECF",row || gx.fn.currentGridRowImpl(51),gx.O.A8501AtoCotepeECF,0)},c2v:function(){gx.O.A8501AtoCotepeECF=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ATOCOTEPEECF",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ATOCOTEPENUMEROCOO",gxz:"Z8502AtoCotepeNumeroCOO",gxold:"O8502AtoCotepeNumeroCOO",gxvar:"A8502AtoCotepeNumeroCOO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8502AtoCotepeNumeroCOO=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8502AtoCotepeNumeroCOO=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ATOCOTEPENUMEROCOO",row || gx.fn.currentGridRowImpl(51),gx.O.A8502AtoCotepeNumeroCOO,0)},c2v:function(){gx.O.A8502AtoCotepeNumeroCOO=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ATOCOTEPENUMEROCOO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ATOCOTEPEDATA",gxz:"Z8498AtoCotepeData",gxold:"O8498AtoCotepeData",gxvar:"A8498AtoCotepeData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8498AtoCotepeData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8498AtoCotepeData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ATOCOTEPEDATA",row || gx.fn.currentGridRowImpl(51),gx.O.A8498AtoCotepeData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8498AtoCotepeData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ATOCOTEPEDATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ATOCOTEPESNCANCELAMENTO",gxz:"Z8499AtoCotepeSnCancelamento",gxold:"O8499AtoCotepeSnCancelamento",gxvar:"A8499AtoCotepeSnCancelamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A8499AtoCotepeSnCancelamento=Value},v2z:function(Value){gx.O.Z8499AtoCotepeSnCancelamento=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("ATOCOTEPESNCANCELAMENTO",row || gx.fn.currentGridRowImpl(51),gx.O.A8499AtoCotepeSnCancelamento,"S")},c2v:function(){gx.O.A8499AtoCotepeSnCancelamento=this.val()},val:function(row){return gx.fn.getGridControlValue("ATOCOTEPESNCANCELAMENTO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[58]={lvl:2,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ATOCOTEPEVALORTOTAL",gxz:"Z9126AtoCotepeValorTotal",gxold:"O9126AtoCotepeValorTotal",gxvar:"A9126AtoCotepeValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9126AtoCotepeValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9126AtoCotepeValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ATOCOTEPEVALORTOTAL",row || gx.fn.currentGridRowImpl(51),gx.O.A9126AtoCotepeValorTotal,2,',')},c2v:function(){gx.O.A9126AtoCotepeValorTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ATOCOTEPEVALORTOTAL",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ATOCOTEPECPFCNPJ",gxz:"Z9127AtoCotepeCPFCNPJ",gxold:"O9127AtoCotepeCPFCNPJ",gxvar:"A9127AtoCotepeCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9127AtoCotepeCPFCNPJ=Value},v2z:function(Value){gx.O.Z9127AtoCotepeCPFCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("ATOCOTEPECPFCNPJ",row || gx.fn.currentGridRowImpl(51),gx.O.A9127AtoCotepeCPFCNPJ,0)},c2v:function(){gx.O.A9127AtoCotepeCPFCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("ATOCOTEPECPFCNPJ",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ATOCOTEPEVALORDESCONTO",gxz:"Z9310AtoCotepeValorDesconto",gxold:"O9310AtoCotepeValorDesconto",gxvar:"A9310AtoCotepeValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9310AtoCotepeValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9310AtoCotepeValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ATOCOTEPEVALORDESCONTO",row || gx.fn.currentGridRowImpl(51),gx.O.A9310AtoCotepeValorDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9310AtoCotepeValorDesconto=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ATOCOTEPEVALORDESCONTO",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ATOCOTEPEVALORACRESCIMO",gxz:"Z9311AtoCotepeValorAcrescimo",gxold:"O9311AtoCotepeValorAcrescimo",gxvar:"A9311AtoCotepeValorAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9311AtoCotepeValorAcrescimo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9311AtoCotepeValorAcrescimo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ATOCOTEPEVALORACRESCIMO",row || gx.fn.currentGridRowImpl(51),gx.O.A9311AtoCotepeValorAcrescimo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9311AtoCotepeValorAcrescimo=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ATOCOTEPEVALORACRESCIMO",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TABLE4",grid:0};
   this.AV6cAtoCotepeEmpresaId = "" ;
   this.ZV6cAtoCotepeEmpresaId = "" ;
   this.OV6cAtoCotepeEmpresaId = "" ;
   this.AV7cAtoCotepeECF = 0 ;
   this.ZV7cAtoCotepeECF = 0 ;
   this.OV7cAtoCotepeECF = 0 ;
   this.AV8cAtoCotepeNumeroCOO = 0 ;
   this.ZV8cAtoCotepeNumeroCOO = 0 ;
   this.OV8cAtoCotepeNumeroCOO = 0 ;
   this.AV9cAtoCotepeData = gx.date.nullDate() ;
   this.ZV9cAtoCotepeData = gx.date.nullDate() ;
   this.OV9cAtoCotepeData = gx.date.nullDate() ;
   this.AV10cAtoCotepeSnCancelamento = "" ;
   this.ZV10cAtoCotepeSnCancelamento = "" ;
   this.OV10cAtoCotepeSnCancelamento = "" ;
   this.AV11cAtoCotepeValorTotal = 0 ;
   this.ZV11cAtoCotepeValorTotal = 0 ;
   this.OV11cAtoCotepeValorTotal = 0 ;
   this.AV12cAtoCotepeCPFCNPJ = "" ;
   this.ZV12cAtoCotepeCPFCNPJ = "" ;
   this.OV12cAtoCotepeCPFCNPJ = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8500AtoCotepeEmpresaId = "" ;
   this.O8500AtoCotepeEmpresaId = "" ;
   this.Z8501AtoCotepeECF = 0 ;
   this.O8501AtoCotepeECF = 0 ;
   this.Z8502AtoCotepeNumeroCOO = 0 ;
   this.O8502AtoCotepeNumeroCOO = 0 ;
   this.Z8498AtoCotepeData = gx.date.nullDate() ;
   this.O8498AtoCotepeData = gx.date.nullDate() ;
   this.Z8499AtoCotepeSnCancelamento = "" ;
   this.O8499AtoCotepeSnCancelamento = "" ;
   this.Z9126AtoCotepeValorTotal = 0 ;
   this.O9126AtoCotepeValorTotal = 0 ;
   this.Z9127AtoCotepeCPFCNPJ = "" ;
   this.O9127AtoCotepeCPFCNPJ = "" ;
   this.Z9310AtoCotepeValorDesconto = 0 ;
   this.O9310AtoCotepeValorDesconto = 0 ;
   this.Z9311AtoCotepeValorAcrescimo = 0 ;
   this.O9311AtoCotepeValorAcrescimo = 0 ;
   this.AV6cAtoCotepeEmpresaId = "" ;
   this.AV7cAtoCotepeECF = 0 ;
   this.AV8cAtoCotepeNumeroCOO = 0 ;
   this.AV9cAtoCotepeData = gx.date.nullDate() ;
   this.AV10cAtoCotepeSnCancelamento = "" ;
   this.AV11cAtoCotepeValorTotal = 0 ;
   this.AV12cAtoCotepeCPFCNPJ = "" ;
   this.AV13pAtoCotepeEmpresaId = "" ;
   this.AV14pAtoCotepeECF = 0 ;
   this.AV15pAtoCotepeNumeroCOO = 0 ;
   this.AV5LinkSelection = "" ;
   this.A8500AtoCotepeEmpresaId = "" ;
   this.A8501AtoCotepeECF = 0 ;
   this.A8502AtoCotepeNumeroCOO = 0 ;
   this.A8498AtoCotepeData = gx.date.nullDate() ;
   this.A8499AtoCotepeSnCancelamento = "" ;
   this.A9126AtoCotepeValorTotal = 0 ;
   this.A9127AtoCotepeCPFCNPJ = "" ;
   this.A9310AtoCotepeValorDesconto = 0 ;
   this.A9311AtoCotepeValorAcrescimo = 0 ;
   this.Events = {"e131vd2_client": ["ENTER", true] ,"e141vd1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAtoCotepeEmpresaId',fld:'vCATOCOTEPEEMPRESAID'},{av:'AV7cAtoCotepeECF',fld:'vCATOCOTEPEECF'},{av:'AV8cAtoCotepeNumeroCOO',fld:'vCATOCOTEPENUMEROCOO'},{av:'AV9cAtoCotepeData',fld:'vCATOCOTEPEDATA'},{av:'AV10cAtoCotepeSnCancelamento',fld:'vCATOCOTEPESNCANCELAMENTO'},{av:'AV11cAtoCotepeValorTotal',fld:'vCATOCOTEPEVALORTOTAL'},{av:'AV12cAtoCotepeCPFCNPJ',fld:'vCATOCOTEPECPFCNPJ'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8500AtoCotepeEmpresaId',fld:'ATOCOTEPEEMPRESAID'},{av:'A8501AtoCotepeECF',fld:'ATOCOTEPEECF'},{av:'A8502AtoCotepeNumeroCOO',fld:'ATOCOTEPENUMEROCOO'}],[{av:'AV13pAtoCotepeEmpresaId',fld:'vPATOCOTEPEEMPRESAID'},{av:'AV14pAtoCotepeECF',fld:'vPATOCOTEPEECF'},{av:'AV15pAtoCotepeNumeroCOO',fld:'vPATOCOTEPENUMEROCOO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAtoCotepeEmpresaId',fld:'vCATOCOTEPEEMPRESAID'},{av:'AV7cAtoCotepeECF',fld:'vCATOCOTEPEECF'},{av:'AV8cAtoCotepeNumeroCOO',fld:'vCATOCOTEPENUMEROCOO'},{av:'AV9cAtoCotepeData',fld:'vCATOCOTEPEDATA'},{av:'AV10cAtoCotepeSnCancelamento',fld:'vCATOCOTEPESNCANCELAMENTO'},{av:'AV11cAtoCotepeValorTotal',fld:'vCATOCOTEPEVALORTOTAL'},{av:'AV12cAtoCotepeCPFCNPJ',fld:'vCATOCOTEPECPFCNPJ'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAtoCotepeEmpresaId',fld:'vCATOCOTEPEEMPRESAID'},{av:'AV7cAtoCotepeECF',fld:'vCATOCOTEPEECF'},{av:'AV8cAtoCotepeNumeroCOO',fld:'vCATOCOTEPENUMEROCOO'},{av:'AV9cAtoCotepeData',fld:'vCATOCOTEPEDATA'},{av:'AV10cAtoCotepeSnCancelamento',fld:'vCATOCOTEPESNCANCELAMENTO'},{av:'AV11cAtoCotepeValorTotal',fld:'vCATOCOTEPEVALORTOTAL'},{av:'AV12cAtoCotepeCPFCNPJ',fld:'vCATOCOTEPECPFCNPJ'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAtoCotepeEmpresaId',fld:'vCATOCOTEPEEMPRESAID'},{av:'AV7cAtoCotepeECF',fld:'vCATOCOTEPEECF'},{av:'AV8cAtoCotepeNumeroCOO',fld:'vCATOCOTEPENUMEROCOO'},{av:'AV9cAtoCotepeData',fld:'vCATOCOTEPEDATA'},{av:'AV10cAtoCotepeSnCancelamento',fld:'vCATOCOTEPESNCANCELAMENTO'},{av:'AV11cAtoCotepeValorTotal',fld:'vCATOCOTEPEVALORTOTAL'},{av:'AV12cAtoCotepeCPFCNPJ',fld:'vCATOCOTEPECPFCNPJ'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAtoCotepeEmpresaId',fld:'vCATOCOTEPEEMPRESAID'},{av:'AV7cAtoCotepeECF',fld:'vCATOCOTEPEECF'},{av:'AV8cAtoCotepeNumeroCOO',fld:'vCATOCOTEPENUMEROCOO'},{av:'AV9cAtoCotepeData',fld:'vCATOCOTEPEDATA'},{av:'AV10cAtoCotepeSnCancelamento',fld:'vCATOCOTEPESNCANCELAMENTO'},{av:'AV11cAtoCotepeValorTotal',fld:'vCATOCOTEPEVALORTOTAL'},{av:'AV12cAtoCotepeCPFCNPJ',fld:'vCATOCOTEPECPFCNPJ'}],[]];
   this.setVCMap("AV13pAtoCotepeEmpresaId", "vPATOCOTEPEEMPRESAID", 0, "char");
   this.setVCMap("AV14pAtoCotepeECF", "vPATOCOTEPEECF", 0, "int");
   this.setVCMap("AV15pAtoCotepeNumeroCOO", "vPATOCOTEPENUMEROCOO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0hd0());
