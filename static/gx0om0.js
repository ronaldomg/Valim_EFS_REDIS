/**@preserve  GeneXus Java 10_3_12-110051 on March 10, 2021 19:9:53.1
*/
gx.evt.autoSkip=!1;gx.define("gx0om0",!1,function(){var n,t;this.ServerClass="gx0om0";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV13pIntegracaoCFOPFilialEmpId=gx.fn.getControlValue("vPINTEGRACAOCFOPFILIALEMPID");this.AV14pIntegracaoCFOPFilialId=gx.fn.getIntegerValue("vPINTEGRACAOCFOPFILIALID",".");this.AV15pIntegracaoCFOPCFOPCodigo=gx.fn.getIntegerValue("vPINTEGRACAOCFOPCFOPCODIGO",".");this.AV16pIntegracaoCFOPTpValor=gx.fn.getControlValue("vPINTEGRACAOCFOPTPVALOR")};this.e132ih2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e142ih1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];this.GXLastCtrlId=60;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0om0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");t.addSingleLineEdit(11901,53,"INTEGRACAOCFOPFILIALEMPID","Emp Id","","IntegracaoCFOPFilialEmpId","char",0,"px",10,10,"left",null,[],11901,"IntegracaoCFOPFilialEmpId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11902,54,"INTEGRACAOCFOPFILIALID","CFOPFilial Id","","IntegracaoCFOPFilialId","int",0,"px",7,7,"right",null,[],11902,"IntegracaoCFOPFilialId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11903,55,"INTEGRACAOCFOPCFOPCODIGO","CFOP","","IntegracaoCFOPCFOPCodigo","int",0,"px",4,4,"right",null,[],11903,"IntegracaoCFOPCFOPCodigo",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11946,56,"INTEGRACAOCFOPTPVALOR","CFOPTp Valor","","IntegracaoCFOPTpValor","char",0,"px",1,1,"left",null,[],11946,"IntegracaoCFOPTpValor",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11919,57,"INTEGRACAOCFOPTPCONTACRE","Conta Cre","","IntegracaoCFOPTpContaCre","char",0,"px",1,1,"left",null,[],11919,"IntegracaoCFOPTpContaCre",!0,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[8]={fld:"GROUP1",grid:0};n[9]={fld:"TABLE2",grid:0};n[12]={fld:"TEXTBLOCKINTEGRACAOCFOPFILIALEMPID",format:0,grid:0};n[14]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCFOPFILIALEMPID",gxz:"ZV6cIntegracaoCFOPFilialEmpId",gxold:"OV6cIntegracaoCFOPFilialEmpId",gxvar:"AV6cIntegracaoCFOPFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cIntegracaoCFOPFilialEmpId=n},v2z:function(n){gx.O.ZV6cIntegracaoCFOPFilialEmpId=n},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCFOPFILIALEMPID",gx.O.AV6cIntegracaoCFOPFilialEmpId,0)},c2v:function(){gx.O.AV6cIntegracaoCFOPFilialEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCFOPFILIALEMPID")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCKINTEGRACAOCFOPFILIALID",format:0,grid:0};n[19]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCFOPFILIALID",gxz:"ZV7cIntegracaoCFOPFilialId",gxold:"OV7cIntegracaoCFOPFilialId",gxvar:"AV7cIntegracaoCFOPFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cIntegracaoCFOPFilialId=gx.num.intval(n)},v2z:function(n){gx.O.ZV7cIntegracaoCFOPFilialId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCFOPFILIALID",gx.O.AV7cIntegracaoCFOPFilialId,0)},c2v:function(){gx.O.AV7cIntegracaoCFOPFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCINTEGRACAOCFOPFILIALID",".")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCKINTEGRACAOCFOPCFOPCODIGO",format:0,grid:0};n[24]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCFOPCFOPCODIGO",gxz:"ZV8cIntegracaoCFOPCFOPCodigo",gxold:"OV8cIntegracaoCFOPCFOPCodigo",gxvar:"AV8cIntegracaoCFOPCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cIntegracaoCFOPCFOPCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV8cIntegracaoCFOPCFOPCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCFOPCFOPCODIGO",gx.O.AV8cIntegracaoCFOPCFOPCodigo,0)},c2v:function(){gx.O.AV8cIntegracaoCFOPCFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCINTEGRACAOCFOPCFOPCODIGO",".")},nac:gx.falseFn};n[27]={fld:"TEXTBLOCKINTEGRACAOCFOPTPVALOR",format:0,grid:0};n[29]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCFOPTPVALOR",gxz:"ZV9cIntegracaoCFOPTpValor",gxold:"OV9cIntegracaoCFOPTpValor",gxvar:"AV9cIntegracaoCFOPTpValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9cIntegracaoCFOPTpValor=n},v2z:function(n){gx.O.ZV9cIntegracaoCFOPTpValor=n},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCFOPTPVALOR",gx.O.AV9cIntegracaoCFOPTpValor,0)},c2v:function(){gx.O.AV9cIntegracaoCFOPTpValor=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCFOPTPVALOR")},nac:gx.falseFn};n[32]={fld:"TEXTBLOCKINTEGRACAOCFOPTPCONTACRE",format:0,grid:0};n[34]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCFOPTPCONTACRE",gxz:"ZV10cIntegracaoCFOPTpContaCre",gxold:"OV10cIntegracaoCFOPTpContaCre",gxvar:"AV10cIntegracaoCFOPTpContaCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10cIntegracaoCFOPTpContaCre=n},v2z:function(n){gx.O.ZV10cIntegracaoCFOPTpContaCre=n},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCFOPTPCONTACRE",gx.O.AV10cIntegracaoCFOPTpContaCre,0)},c2v:function(){gx.O.AV10cIntegracaoCFOPTpContaCre=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCFOPTPCONTACRE")},nac:gx.falseFn};n[37]={fld:"TEXTBLOCKINTEGRACAOCFOPCCONTABCREEMPID",format:0,grid:0};n[39]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCFOPCCONTABCREEMPID",gxz:"ZV11cIntegracaoCFOPCContabCreEmpId",gxold:"OV11cIntegracaoCFOPCContabCreEmpId",gxvar:"AV11cIntegracaoCFOPCContabCreEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11cIntegracaoCFOPCContabCreEmpId=n},v2z:function(n){gx.O.ZV11cIntegracaoCFOPCContabCreEmpId=n},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCFOPCCONTABCREEMPID",gx.O.AV11cIntegracaoCFOPCContabCreEmpId,0)},c2v:function(){gx.O.AV11cIntegracaoCFOPCContabCreEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCFOPCCONTABCREEMPID")},nac:gx.falseFn};n[42]={fld:"TEXTBLOCKINTEGRACAOCFOPCCONTABCREID",format:0,grid:0};n[44]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCFOPCCONTABCREID",gxz:"ZV12cIntegracaoCFOPCContabCreId",gxold:"OV12cIntegracaoCFOPCContabCreId",gxvar:"AV12cIntegracaoCFOPCContabCreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12cIntegracaoCFOPCContabCreId=n},v2z:function(n){gx.O.ZV12cIntegracaoCFOPCContabCreId=n},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCFOPCCONTABCREID",gx.O.AV12cIntegracaoCFOPCContabCreId,0)},c2v:function(){gx.O.AV12cIntegracaoCFOPCContabCreId=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCFOPCCONTABCREID")},nac:gx.falseFn};n[47]={fld:"GROUP2",grid:0};n[48]={fld:"TABLE3",grid:0};n[52]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(51))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(51))},gxvar_GXI:"AV19Linkselection_GXI",nac:gx.falseFn};n[53]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCFOPFILIALEMPID",gxz:"Z11901IntegracaoCFOPFilialEmpId",gxold:"O11901IntegracaoCFOPFilialEmpId",gxvar:"A11901IntegracaoCFOPFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11901IntegracaoCFOPFilialEmpId=n},v2z:function(n){gx.O.Z11901IntegracaoCFOPFilialEmpId=n},v2c:function(n){gx.fn.setGridControlValue("INTEGRACAOCFOPFILIALEMPID",n||gx.fn.currentGridRowImpl(51),gx.O.A11901IntegracaoCFOPFilialEmpId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11901IntegracaoCFOPFilialEmpId=this.val()},val:function(n){return gx.fn.getGridControlValue("INTEGRACAOCFOPFILIALEMPID",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[54]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCFOPFILIALID",gxz:"Z11902IntegracaoCFOPFilialId",gxold:"O11902IntegracaoCFOPFilialId",gxvar:"A11902IntegracaoCFOPFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11902IntegracaoCFOPFilialId=gx.num.intval(n)},v2z:function(n){gx.O.Z11902IntegracaoCFOPFilialId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("INTEGRACAOCFOPFILIALID",n||gx.fn.currentGridRowImpl(51),gx.O.A11902IntegracaoCFOPFilialId,0)},c2v:function(){gx.O.A11902IntegracaoCFOPFilialId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("INTEGRACAOCFOPFILIALID",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[55]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCFOPCFOPCODIGO",gxz:"Z11903IntegracaoCFOPCFOPCodigo",gxold:"O11903IntegracaoCFOPCFOPCodigo",gxvar:"A11903IntegracaoCFOPCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11903IntegracaoCFOPCFOPCodigo=gx.num.intval(n)},v2z:function(n){gx.O.Z11903IntegracaoCFOPCFOPCodigo=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("INTEGRACAOCFOPCFOPCODIGO",n||gx.fn.currentGridRowImpl(51),gx.O.A11903IntegracaoCFOPCFOPCodigo,0)},c2v:function(){gx.O.A11903IntegracaoCFOPCFOPCodigo=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("INTEGRACAOCFOPCFOPCODIGO",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[56]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCFOPTPVALOR",gxz:"Z11946IntegracaoCFOPTpValor",gxold:"O11946IntegracaoCFOPTpValor",gxvar:"A11946IntegracaoCFOPTpValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11946IntegracaoCFOPTpValor=n},v2z:function(n){gx.O.Z11946IntegracaoCFOPTpValor=n},v2c:function(n){gx.fn.setGridControlValue("INTEGRACAOCFOPTPVALOR",n||gx.fn.currentGridRowImpl(51),gx.O.A11946IntegracaoCFOPTpValor,0)},c2v:function(){gx.O.A11946IntegracaoCFOPTpValor=this.val()},val:function(n){return gx.fn.getGridControlValue("INTEGRACAOCFOPTPVALOR",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[57]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCFOPTPCONTACRE",gxz:"Z11919IntegracaoCFOPTpContaCre",gxold:"O11919IntegracaoCFOPTpContaCre",gxvar:"A11919IntegracaoCFOPTpContaCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11919IntegracaoCFOPTpContaCre=n},v2z:function(n){gx.O.Z11919IntegracaoCFOPTpContaCre=n},v2c:function(n){gx.fn.setGridControlValue("INTEGRACAOCFOPTPCONTACRE",n||gx.fn.currentGridRowImpl(51),gx.O.A11919IntegracaoCFOPTpContaCre,0)},c2v:function(){gx.O.A11919IntegracaoCFOPTpContaCre=this.val()},val:function(n){return gx.fn.getGridControlValue("INTEGRACAOCFOPTPCONTACRE",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[60]={fld:"TABLE4",grid:0};this.AV6cIntegracaoCFOPFilialEmpId="";this.ZV6cIntegracaoCFOPFilialEmpId="";this.OV6cIntegracaoCFOPFilialEmpId="";this.AV7cIntegracaoCFOPFilialId=0;this.ZV7cIntegracaoCFOPFilialId=0;this.OV7cIntegracaoCFOPFilialId=0;this.AV8cIntegracaoCFOPCFOPCodigo=0;this.ZV8cIntegracaoCFOPCFOPCodigo=0;this.OV8cIntegracaoCFOPCFOPCodigo=0;this.AV9cIntegracaoCFOPTpValor="";this.ZV9cIntegracaoCFOPTpValor="";this.OV9cIntegracaoCFOPTpValor="";this.AV10cIntegracaoCFOPTpContaCre="";this.ZV10cIntegracaoCFOPTpContaCre="";this.OV10cIntegracaoCFOPTpContaCre="";this.AV11cIntegracaoCFOPCContabCreEmpId="";this.ZV11cIntegracaoCFOPCContabCreEmpId="";this.OV11cIntegracaoCFOPCContabCreEmpId="";this.AV12cIntegracaoCFOPCContabCreId="";this.ZV12cIntegracaoCFOPCContabCreId="";this.OV12cIntegracaoCFOPCContabCreId="";this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z11901IntegracaoCFOPFilialEmpId="";this.O11901IntegracaoCFOPFilialEmpId="";this.Z11902IntegracaoCFOPFilialId=0;this.O11902IntegracaoCFOPFilialId=0;this.Z11903IntegracaoCFOPCFOPCodigo=0;this.O11903IntegracaoCFOPCFOPCodigo=0;this.Z11946IntegracaoCFOPTpValor="";this.O11946IntegracaoCFOPTpValor="";this.Z11919IntegracaoCFOPTpContaCre="";this.O11919IntegracaoCFOPTpContaCre="";this.AV6cIntegracaoCFOPFilialEmpId="";this.AV7cIntegracaoCFOPFilialId=0;this.AV8cIntegracaoCFOPCFOPCodigo=0;this.AV9cIntegracaoCFOPTpValor="";this.AV10cIntegracaoCFOPTpContaCre="";this.AV11cIntegracaoCFOPCContabCreEmpId="";this.AV12cIntegracaoCFOPCContabCreId="";this.AV13pIntegracaoCFOPFilialEmpId="";this.AV14pIntegracaoCFOPFilialId=0;this.AV15pIntegracaoCFOPCFOPCodigo=0;this.AV16pIntegracaoCFOPTpValor="";this.A11907IntegracaoCFOPCContabCreId="";this.A11906IntegracaoCFOPCContabCreEmpId="";this.AV5LinkSelection="";this.A11901IntegracaoCFOPFilialEmpId="";this.A11902IntegracaoCFOPFilialId=0;this.A11903IntegracaoCFOPCFOPCodigo=0;this.A11946IntegracaoCFOPTpValor="";this.A11919IntegracaoCFOPTpContaCre="";this.Events={e132ih2_client:["ENTER",!0],e142ih1_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cIntegracaoCFOPFilialEmpId",fld:"vCINTEGRACAOCFOPFILIALEMPID"},{av:"AV7cIntegracaoCFOPFilialId",fld:"vCINTEGRACAOCFOPFILIALID"},{av:"AV8cIntegracaoCFOPCFOPCodigo",fld:"vCINTEGRACAOCFOPCFOPCODIGO"},{av:"AV9cIntegracaoCFOPTpValor",fld:"vCINTEGRACAOCFOPTPVALOR"},{av:"AV10cIntegracaoCFOPTpContaCre",fld:"vCINTEGRACAOCFOPTPCONTACRE"},{av:"AV11cIntegracaoCFOPCContabCreEmpId",fld:"vCINTEGRACAOCFOPCCONTABCREEMPID"},{av:"AV12cIntegracaoCFOPCContabCreId",fld:"vCINTEGRACAOCFOPCCONTABCREID"}],[]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A11901IntegracaoCFOPFilialEmpId",fld:"INTEGRACAOCFOPFILIALEMPID"},{av:"A11902IntegracaoCFOPFilialId",fld:"INTEGRACAOCFOPFILIALID"},{av:"A11903IntegracaoCFOPCFOPCodigo",fld:"INTEGRACAOCFOPCFOPCODIGO"},{av:"A11946IntegracaoCFOPTpValor",fld:"INTEGRACAOCFOPTPVALOR"}],[{av:"AV13pIntegracaoCFOPFilialEmpId",fld:"vPINTEGRACAOCFOPFILIALEMPID"},{av:"AV14pIntegracaoCFOPFilialId",fld:"vPINTEGRACAOCFOPFILIALID"},{av:"AV15pIntegracaoCFOPCFOPCodigo",fld:"vPINTEGRACAOCFOPCFOPCODIGO"},{av:"AV16pIntegracaoCFOPTpValor",fld:"vPINTEGRACAOCFOPTPVALOR"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cIntegracaoCFOPFilialEmpId",fld:"vCINTEGRACAOCFOPFILIALEMPID"},{av:"AV7cIntegracaoCFOPFilialId",fld:"vCINTEGRACAOCFOPFILIALID"},{av:"AV8cIntegracaoCFOPCFOPCodigo",fld:"vCINTEGRACAOCFOPCFOPCODIGO"},{av:"AV9cIntegracaoCFOPTpValor",fld:"vCINTEGRACAOCFOPTPVALOR"},{av:"AV10cIntegracaoCFOPTpContaCre",fld:"vCINTEGRACAOCFOPTPCONTACRE"},{av:"AV11cIntegracaoCFOPCContabCreEmpId",fld:"vCINTEGRACAOCFOPCCONTABCREEMPID"},{av:"AV12cIntegracaoCFOPCContabCreId",fld:"vCINTEGRACAOCFOPCCONTABCREID"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cIntegracaoCFOPFilialEmpId",fld:"vCINTEGRACAOCFOPFILIALEMPID"},{av:"AV7cIntegracaoCFOPFilialId",fld:"vCINTEGRACAOCFOPFILIALID"},{av:"AV8cIntegracaoCFOPCFOPCodigo",fld:"vCINTEGRACAOCFOPCFOPCODIGO"},{av:"AV9cIntegracaoCFOPTpValor",fld:"vCINTEGRACAOCFOPTPVALOR"},{av:"AV10cIntegracaoCFOPTpContaCre",fld:"vCINTEGRACAOCFOPTPCONTACRE"},{av:"AV11cIntegracaoCFOPCContabCreEmpId",fld:"vCINTEGRACAOCFOPCCONTABCREEMPID"},{av:"AV12cIntegracaoCFOPCContabCreId",fld:"vCINTEGRACAOCFOPCCONTABCREID"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cIntegracaoCFOPFilialEmpId",fld:"vCINTEGRACAOCFOPFILIALEMPID"},{av:"AV7cIntegracaoCFOPFilialId",fld:"vCINTEGRACAOCFOPFILIALID"},{av:"AV8cIntegracaoCFOPCFOPCodigo",fld:"vCINTEGRACAOCFOPCFOPCODIGO"},{av:"AV9cIntegracaoCFOPTpValor",fld:"vCINTEGRACAOCFOPTPVALOR"},{av:"AV10cIntegracaoCFOPTpContaCre",fld:"vCINTEGRACAOCFOPTPCONTACRE"},{av:"AV11cIntegracaoCFOPCContabCreEmpId",fld:"vCINTEGRACAOCFOPCCONTABCREEMPID"},{av:"AV12cIntegracaoCFOPCContabCreId",fld:"vCINTEGRACAOCFOPCCONTABCREID"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cIntegracaoCFOPFilialEmpId",fld:"vCINTEGRACAOCFOPFILIALEMPID"},{av:"AV7cIntegracaoCFOPFilialId",fld:"vCINTEGRACAOCFOPFILIALID"},{av:"AV8cIntegracaoCFOPCFOPCodigo",fld:"vCINTEGRACAOCFOPCFOPCODIGO"},{av:"AV9cIntegracaoCFOPTpValor",fld:"vCINTEGRACAOCFOPTPVALOR"},{av:"AV10cIntegracaoCFOPTpContaCre",fld:"vCINTEGRACAOCFOPTPCONTACRE"},{av:"AV11cIntegracaoCFOPCContabCreEmpId",fld:"vCINTEGRACAOCFOPCCONTABCREEMPID"},{av:"AV12cIntegracaoCFOPCContabCreId",fld:"vCINTEGRACAOCFOPCCONTABCREID"}],[]];this.setVCMap("AV13pIntegracaoCFOPFilialEmpId","vPINTEGRACAOCFOPFILIALEMPID",0,"char");this.setVCMap("AV14pIntegracaoCFOPFilialId","vPINTEGRACAOCFOPFILIALID",0,"int");this.setVCMap("AV15pIntegracaoCFOPCFOPCodigo","vPINTEGRACAOCFOPCFOPCODIGO",0,"int");this.setVCMap("AV16pIntegracaoCFOPTpValor","vPINTEGRACAOCFOPTPVALOR",0,"char");t.addRefreshingVar(this.GXValidFnc[14]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[24]);t.addRefreshingVar(this.GXValidFnc[29]);t.addRefreshingVar(this.GXValidFnc[34]);t.addRefreshingVar(this.GXValidFnc[39]);t.addRefreshingVar(this.GXValidFnc[44]);this.InitStandaloneVars()});gx.setParentObj(new gx0om0)